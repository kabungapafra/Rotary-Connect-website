import { useEffect, useState } from "react";
import { API_BASE, EVENTS, NEWS, PROJECTS } from "./siteData";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/// Fetches an admin-managed list from the public /site/* endpoints.
///
/// Returns `null` while the first request is in flight, so a section can
/// hold its ground instead of flashing the fallback and then swapping.
///
/// If the request fails the hardcoded copy in siteData.js is used — a
/// backend outage should degrade the marketing site to its old static
/// self, not blank out half the page. An empty *successful* response is
/// different: it means the admin published nothing, and is returned as an
/// empty array so the section can hide itself.
function useRemoteList(path, mapRow, fallback) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}${path}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.status))))
      .then((rows) => {
        if (cancelled) return;
        setItems(Array.isArray(rows) ? rows.map(mapRow) : fallback);
      })
      .catch(() => {
        if (!cancelled) setItems(fallback);
      });
    return () => {
      cancelled = true;
    };
    // mapRow/fallback are module-level constants per caller below, so the
    // path alone identifies the request.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return items;
}

function formatDay(iso) {
  const parsed = new Date(`${iso}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

const mapEvent = (row) => {
  const date = formatDay(row.event_date);
  return {
    mon: date ? MONTHS[date.getMonth()] : "",
    day: date ? String(date.getDate()).padStart(2, "0") : "",
    title: row.title,
    meta: row.meta,
    kind: row.kind,
  };
};

const mapNews = (row) => {
  const date = formatDay(row.published_on);
  return {
    date: date
      ? `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
      : "",
    title: row.title,
    body: row.body,
  };
};

const mapProject = (row) => {
  const due = row.deadline ? formatDay(row.deadline) : null;
  return {
    tag: row.tag,
    area: row.area,
    title: row.title,
    body: row.body,
    // The wording lives here rather than in the admin form so every card
    // reads the same regardless of who typed it.
    progress: `${row.progress_percent}% complete`,
    deadline: due ? `Due ${MONTHS[due.getMonth()]} ${due.getFullYear()}` : "",
    photo: row.photo_caption,
    photoUrl: row.photo || null,
  };
};

export const useEvents = () => useRemoteList("/site/events", mapEvent, EVENTS);
export const useNews = () => useRemoteList("/site/news", mapNews, NEWS);
export const useProjects = () =>
  useRemoteList("/site/projects", mapProject, PROJECTS);
