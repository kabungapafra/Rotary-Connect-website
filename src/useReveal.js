import { useEffect } from "react";

/// Fades sections in as they come into view.
///
/// Two things this has to survive:
///
/// 1. Sections that mount late. Projects and Events render nothing until
///    their fetch resolves, so a one-off scan at mount misses them
///    entirely and they stay at opacity 0 forever. A MutationObserver
///    picks up anything added afterwards.
/// 2. The script not running at all. The hidden state in index.css is
///    scoped to `html.js`, which is only set here — so without this the
///    page is simply visible rather than blank.
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) {
      return; // leave everything visible rather than hiding what we can't reveal
    }
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const observe = (root_) => {
      if (!(root_ instanceof Element)) return;
      if (root_.classList?.contains("reveal") && !root_.classList.contains("in")) {
        io.observe(root_);
      }
      root_.querySelectorAll?.(".reveal:not(.in)").forEach((el) => io.observe(el));
    };

    observe(document.body);

    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach(observe);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
