import { useEvents } from "../data/useSiteContent";

export default function Events({ show = true }) {
  const events = useEvents();
  // null = still loading, [] = admin published nothing. Either way there is
  // no calendar worth showing.
  if (!show || events === null || events.length === 0) return null;
  return (
    <section id="events" className="reveal" style={{ padding: "clamp(52px, 7vw, 80px) clamp(18px, 4vw, 44px)" }}>
      <div className="grid-events" style={{ display: "grid", gap: "clamp(28px, 4vw, 56px)", maxWidth: 1440, margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "#FDF1D8", color: "#7A5200", fontSize: 13, fontWeight: 600 }}>
            Calendar
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "12ch" }}>
            What's Coming Up
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A5A6B", margin: "18px 0 0", maxWidth: "34ch" }}>
            Your club's own weekly and monthly events, each with a QR code you can print for check-in or registration.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {events.map((ev) => (
            <div key={ev.title} className="lift" style={{ display: "grid", gridTemplateColumns: "60px minmax(0, 1fr) auto", gap: "clamp(12px, 2vw, 22px)", alignItems: "center", padding: "clamp(14px, 2vw, 18px) clamp(14px, 2vw, 22px)", borderRadius: 18, background: "#ffffff" }}>
              <div style={{ textAlign: "center", borderRadius: 14, background: "#F2F5F9", padding: "9px 4px" }}>
                <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#A8720F" }}>
                  {ev.mon}
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 22, fontWeight: 800, lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}>
                  {ev.day}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {ev.title}
                </div>
                <div style={{ fontSize: 14, color: "#8494A6", marginTop: 4 }}>{ev.meta}</div>
              </div>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "#0050A2", background: "#FDF1D8", padding: "7px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>
                {ev.kind}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
