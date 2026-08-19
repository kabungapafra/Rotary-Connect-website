import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import { PILLARS, JOIN_URL } from "../data/siteData";
import presidentApp from "../assets/president-app.png";

export default function Mission() {
  return (
    <section id="mission" className="reveal" style={{ padding: "clamp(52px, 7vw, 88px) clamp(18px, 4vw, 44px) clamp(44px, 6vw, 72px)", maxWidth: 1440, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(28px, 4vw, 56px)", alignItems: "start" }}>
        <div style={{ borderRadius: 22, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={presidentApp}
            alt="President setting up the club in the app"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", display: "block" }}
          />
        </div>
        <div>
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "#FDF1D8", color: "#7A5200", fontSize: 13, fontWeight: 600 }}>
            How it works
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "18ch" }}>
            How Your Club Uses It
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))", gap: 26, marginTop: 28 }}>
            {PILLARS.map((p) => (
              <div key={p.n}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: "#F7A81B", color: "#101820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 13 }}>
                  {p.n}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", margin: "14px 0 6px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4A5A6B", margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginTop: 30, padding: "14px 14px 14px 24px", borderRadius: 999, background: "#0050A2" }}>
            <span style={{ fontSize: 14.5, color: "#DCE7F7", maxWidth: "46ch" }}>
              Most clubs are fully set up and checking in members within a week.
            </span>
            <Hoverable
              as={Link}
              to={JOIN_URL}
              style={{ display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap", padding: "11px 20px", borderRadius: 999, background: "#F7A81B", color: "#101820", fontWeight: 700, fontSize: 14 }}
              hoverStyle={{ background: "#FFC745", color: "#101820" }}
            >
              Learn more{" "}
              <span style={{ width: 17, height: 17, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 10, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                →
              </span>
            </Hoverable>
          </div>
        </div>
      </div>
    </section>
  );
}
