import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hoverable from "../components/Hoverable";
import { CLUB_TYPES, STEPS, GOOD_TO_KNOW, CONTACT_EMAIL, API_BASE } from "../data/siteData";

const HEARD_ABOUT_OPTIONS = [
  "Search engine",
  "Social media",
  "Word of mouth / referral",
  "District or club event",
  "Digiflect Tech team",
  "Other",
];

const PROBLEM_OPTIONS = [
  "Attendance tracking",
  "Dues & treasury",
  "Meeting minutes",
  "Member records",
  "Events",
  "Club communication",
];

function normalizeUgandaPhone(raw) {
  let digits = String(raw || "").replace(/\D/g, "");
  if (digits.startsWith("0")) {
    digits = "256" + digits.slice(1);
  } else if (digits.length === 9) {
    digits = "256" + digits;
  }
  return digits;
}

function isValidUgandaPhone(raw) {
  return /^256\d{9}$/.test(normalizeUgandaPhone(raw));
}

// Downscale to the same 512px box the admin dashboard's club wizard uses,
// so an approved request's logo drops straight into onboarding. Also keeps
// a phone-camera original from blowing the API's data-URL size cap.
const LOGO_MAX_PX = 512;

function readLogoAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that image"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("That file isn't a readable image"));
      img.onload = () => {
        const scale = Math.min(1, LOGO_MAX_PX / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

const inputStyle = {
  width: "100%",
  padding: "13px 18px",
  borderRadius: 14,
  border: "1px solid #DCE3EC",
  background: "#ffffff",
  fontSize: 14.5,
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "#101820",
  marginBottom: 8,
};

const helperStyle = { fontSize: 12, color: "#8494A6", marginTop: 6, display: "block" };
const errorStyle = { fontSize: 12, color: "#B3261E", marginTop: 6, display: "block" };

function Field({ label, children, span2 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gridColumn: span2 ? "1 / -1" : undefined }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function PillToggle({ options, selected, onToggle, multi }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
      {options.map((opt) => {
        const on = multi ? selected.includes(opt) : selected === opt;
        return (
          <button
            type="button"
            key={opt}
            onClick={() => onToggle(opt)}
            style={{
              padding: "11px 18px",
              borderRadius: 999,
              border: `1px solid ${on ? "#0050A2" : "#DCE3EC"}`,
              background: on ? "#0050A2" : "#F2F5F9",
              color: on ? "#ffffff" : "#4A5A6B",
              fontSize: 13.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function RequestToJoin() {
  const [form, setForm] = useState({
    clubName: "",
    clubType: "Rotary",
    district: "",
    location: "",
    charterDate: "",
    members: "",
    logoFile: null,
    presidentName: "",
    presidentRole: "",
    phone: "",
    email: "",
    dob: "",
    heardAbout: "",
    problems: [],
    notes: "",
    consentAuthorized: false,
    consentContact: false,
  });
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleProblem = (opt) =>
    setForm((f) => ({
      ...f,
      problems: f.problems.includes(opt) ? f.problems.filter((p) => p !== opt) : [...f.problems, opt],
    }));

  const phoneInvalid = form.phone !== "" && !isValidUgandaPhone(form.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidUgandaPhone(form.phone)) {
      setPhoneTouched(true);
      return;
    }
    setSending(true);
    setSendError("");
    try {
      const logo = form.logoFile ? await readLogoAsDataUrl(form.logoFile) : null;
      const res = await fetch(`${API_BASE}/site/join-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          club_name: form.clubName,
          club_type: form.clubType,
          district: form.district,
          location: form.location,
          // The date inputs submit "" when left blank; the API expects null.
          charter_date: form.charterDate || null,
          members_count: Number(form.members) || 0,
          logo,
          contact_name: form.presidentName,
          contact_role: form.presidentRole,
          phone: form.phone,
          email: form.email,
          dob: form.dob,
          heard_about: form.heardAbout,
          problems: form.problems,
          notes: form.notes,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || "We couldn't send your request. Please try again.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      // Never show the success screen on a failure — the club would walk
      // away believing they'd applied when nothing reached the admin.
      setSendError(
        err.message === "Failed to fetch"
          ? `We couldn't reach our servers. Please try again, or email ${CONTACT_EMAIL}.`
          : err.message
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ background: "#F2F5F9" }}>
      <div style={{ background: "#17458F", padding: "0 0 56px" }}>
        <Header />
        <section style={{ padding: "40px 44px 0", maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "rgba(247,168,27,0.14)", color: "#F7A81B", fontSize: 13, fontWeight: 600 }}>
            Membership request
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 46, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", color: "#ffffff", margin: "20px 0 0", maxWidth: "18ch" }}>
            Put Your Club On The Map
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#B9CCE8", maxWidth: "56ch", margin: "16px 0 0" }}>
            One officer, one form, about a week to get set up. Talk to us about pricing.
          </p>
        </section>
      </div>

      <section style={{ padding: "0 44px 88px", marginTop: -32 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          {submitted ? (
            <div style={{ maxWidth: 640, margin: "0 auto", borderRadius: 22, background: "#ffffff", padding: 48, textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: "#F7A81B", color: "#101820", fontSize: 24, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                ✓
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", margin: "22px 0 0" }}>
                Request received
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A5A6B", maxWidth: "52ch", margin: "12px auto 0" }}>
                We'll verify your club details and get back to you on the number you gave. Once approved, the President
                gets their member number and PIN by text, signs into the app, and adds the rest of the club.
              </p>
              <Hoverable
                as={Link}
                to="/"
                style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 32, padding: "13px 24px", borderRadius: 999, background: "#0050A2", color: "#ffffff", fontWeight: 700, fontSize: 14 }}
                hoverStyle={{ background: "#17458F", color: "#ffffff" }}
              >
                Back to Rotary Connect
              </Hoverable>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24, alignItems: "start" }}>
              <form onSubmit={handleSubmit} style={{ borderRadius: 22, background: "#ffffff", padding: 44 }}>
              {/* Section 1 — About the club */}
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em", margin: 0 }}>
                About the club
              </h2>
              <p style={{ fontSize: 14, color: "#8494A6", margin: "8px 0 0" }}>
                Open to Rotary clubs and Rotaract clubs today.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 28 }}>
                <Field label="Club name">
                  <input required value={form.clubName} onChange={update("clubName")} placeholder="e.g. Rotary Club of Mbalwa" style={inputStyle} />
                </Field>
                <Field label="Club type">
                  <PillToggle options={CLUB_TYPES} selected={form.clubType} onToggle={(t) => setForm((f) => ({ ...f, clubType: t }))} />
                </Field>
                <Field label="District">
                  <input required value={form.district} onChange={update("district")} placeholder="e.g. 9213" style={inputStyle} />
                </Field>
                <Field label="Location">
                  <input required value={form.location} onChange={update("location")} placeholder="Town/city and country" style={inputStyle} />
                </Field>
                <Field label="Charter date">
                  <input type="date" value={form.charterDate} onChange={update("charterDate")} style={inputStyle} />
                </Field>
                <Field label="Approximate number of members">
                  <input required type="number" min="1" value={form.members} onChange={update("members")} placeholder="e.g. 40" style={inputStyle} />
                </Field>
                <Field label="Club logo" span2>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(e) => setForm((f) => ({ ...f, logoFile: e.target.files[0] || null }))}
                    style={{ ...inputStyle, padding: "10px 14px" }}
                  />
                  <span style={helperStyle}>PNG or JPG, square works best. Optional — can be added later.</span>
                </Field>
              </div>

              {/* Section 2 — The person who will run it */}
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em", margin: "40px 0 0" }}>
                The person who will run it
              </h2>
              <p style={{ fontSize: 14, color: "#8494A6", margin: "8px 0 0" }}>
                This becomes the Club President account — the first login created at onboarding, and the only one who can add everyone else. Get it right or the club can't start.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 28 }}>
                <Field label="Full name">
                  <input required value={form.presidentName} onChange={update("presidentName")} placeholder="Full name" style={inputStyle} />
                </Field>
                <Field label="Role in club">
                  <input required value={form.presidentRole} onChange={update("presidentRole")} placeholder="President, Secretary, etc." style={inputStyle} />
                </Field>
                <Field label="Phone number">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    onBlur={() => setPhoneTouched(true)}
                    placeholder="0757029368"
                    style={{ ...inputStyle, borderColor: phoneTouched && phoneInvalid ? "#B3261E" : "#DCE3EC" }}
                  />
                  {phoneTouched && phoneInvalid ? (
                    <span style={errorStyle}>Enter a valid Ugandan number — e.g. 0757029368, 757029368 or 256757029368.</span>
                  ) : (
                    <span style={helperStyle}>Their login, and where credentials are texted. Must be unique — rejected if it already belongs to a member of any club.</span>
                  )}
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="name@club.org" style={inputStyle} />
                </Field>
                <Field label="Date of birth">
                  <input type="date" value={form.dob} onChange={update("dob")} style={inputStyle} />
                  <span style={helperStyle}>Optional — drives birthday wishes.</span>
                </Field>
              </div>

              {/* Section 3 — Context */}
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em", margin: "40px 0 0" }}>
                Context
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 28 }}>
                <Field label="How did you hear about Rotary Connect?">
                  <select value={form.heardAbout} onChange={update("heardAbout")} style={inputStyle}>
                    <option value="">Select one</option>
                    {HEARD_ABOUT_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="What do you most want to solve?" span2>
                  <PillToggle options={PROBLEM_OPTIONS} selected={form.problems} onToggle={toggleProblem} multi />
                </Field>
                <Field label="Anything else" span2>
                  <textarea
                    value={form.notes}
                    onChange={update("notes")}
                    placeholder="Anything that'll help us set you up."
                    rows={5}
                    style={{ ...inputStyle, borderRadius: 18, resize: "vertical", fontFamily: "inherit" }}
                  />
                </Field>
              </div>

              {/* Section 4 — Consent */}
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em", margin: "40px 0 0" }}>
                Consent
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 20 }}>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "#101820" }}>
                  <input
                    required
                    type="checkbox"
                    checked={form.consentAuthorized}
                    onChange={(e) => setForm((f) => ({ ...f, consentAuthorized: e.target.checked }))}
                    style={{ marginTop: 3, width: 16, height: 16, flex: "none" }}
                  />
                  I'm authorised to request this on behalf of my club
                </label>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "#101820" }}>
                  <input
                    required
                    type="checkbox"
                    checked={form.consentContact}
                    onChange={(e) => setForm((f) => ({ ...f, consentContact: e.target.checked }))}
                    style={{ marginTop: 3, width: 16, height: 16, flex: "none" }}
                  />
                  I agree to be contacted about setup
                </label>
              </div>

              {sendError && (
                <div style={{ marginTop: 28, padding: "14px 18px", borderRadius: 14, background: "#FDECEA", color: "#B3261E", fontSize: 13.5, lineHeight: 1.6 }}>
                  {sendError}
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: "#8494A6", maxWidth: "40ch" }}>
                  We'll verify your club details and get back to you on the number you gave.
                </span>
                <button
                  type="submit"
                  disabled={sending}
                  style={{ padding: "15px 28px", borderRadius: 999, background: "#F7A81B", color: "#101820", fontWeight: 700, fontSize: 15, border: "none", cursor: sending ? "not-allowed" : "pointer", whiteSpace: "nowrap", opacity: sending ? 0.6 : 1 }}
                >
                  {sending ? "Sending…" : "Send request →"}
                </button>
              </div>
              </form>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ borderRadius: 22, background: "#ffffff", padding: 28, position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>
                    What happens next
                  </div>
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
                    {STEPS.map((s, i) => (
                      <div key={s.n} style={{ display: "flex", gap: 12, padding: "14px 0", borderTop: i === 0 ? "none" : "1px solid #E9EDF4" }}>
                        <span style={{ width: 26, height: 26, borderRadius: 999, background: "#0050A2", color: "#ffffff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                          {s.n}
                        </span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14.5 }}>{s.title}</div>
                          <div style={{ fontSize: 13, color: "#8494A6", marginTop: 2, lineHeight: 1.5 }}>
                            {s.when} — {s.body}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderRadius: 22, background: "#17458F", padding: 28, marginTop: -18, position: "relative", zIndex: 2 }}>
                  <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 999, background: "rgba(247,168,27,0.14)", color: "#F7A81B", fontSize: 12.5, fontWeight: 700 }}>
                    Good to know
                  </div>
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
                    {GOOD_TO_KNOW.map((g, i) => (
                      <div key={g} style={{ padding: "12px 0", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)", fontSize: 13.5, lineHeight: 1.6, color: "#DCE7F7" }}>
                        {g}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 4, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.12)", fontSize: 13.5, color: "#DCE7F7" }}>
                    Questions? <span style={{ color: "#F7A81B", fontWeight: 600 }}>{CONTACT_EMAIL}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
