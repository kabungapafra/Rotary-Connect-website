import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import { STEPS, ELIGIBLE, JOIN_URL } from "../data/siteData";

export default function HowItWorks() {
  return (
    <section id="how" className="reveal" style={{ padding: "clamp(48px, 6vw, 76px) clamp(18px, 4vw, 44px)", background: "#ffffff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="grid-howitworks" style={{ display: "grid", gap: "clamp(24px, 4vw, 56px)", alignItems: "end" }}>
          <div>
            <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "#FDF1D8", color: "#7A5200", fontSize: 13, fontWeight: 600 }}>
              Membership
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "22ch" }}>
              Getting Set Up Takes Four Steps And About A Week
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A5A6B", margin: 0 }}>
              Talk to us about pricing — plans are built around your club's size. Rotary Connect is built and supported by Digiflect Tech.
            </p>
            <Hoverable
              as={Link}
              to={JOIN_URL}
              style={{ display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap", marginTop: 16, padding: "12px 22px", borderRadius: 999, background: "#F7A81B", color: "#101820", fontWeight: 700, fontSize: 14 }}
              hoverStyle={{ background: "#0050A2", color: "#ffffff" }}
            >
              Start a request{" "}
              <span style={{ width: 17, height: 17, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 10, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                →
              </span>
            </Hoverable>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 205px), 1fr))", gap: 18, marginTop: 40 }}>
          {STEPS.map((s) => (
            <div key={s.n} className="lift" style={{ borderRadius: 20, background: "#F2F5F9", padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: 40, height: 40, borderRadius: 999, background: "#0050A2", color: "#F7A81B", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {s.n}
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "#A8720F" }}>{s.when}</span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", margin: "20px 0 8px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A5A6B", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 26, alignItems: "center" }}>
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "#4A5A6B" }}>Open to</span>
          {ELIGIBLE.map((e) => (
            <span key={e} style={{ padding: "8px 15px", borderRadius: 999, background: "#F2F5F9", color: "#101820", fontSize: 13.5, fontWeight: 500 }}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
