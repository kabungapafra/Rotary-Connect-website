import { Link } from "react-router-dom";
import { SERVICES, HOW_TO_USE_URL } from "../data/siteData";
import { SERVICE_ICONS } from "./icons";
import howDoesItWork from "../assets/how-does-it-work.jpeg";

export default function ServicesBar() {
  return (
    <section className="grid-services" style={{ display: "grid", gap: 18, padding: "0 clamp(18px, 4vw, 44px)", maxWidth: 1440, margin: "clamp(-56px, -4vw, -24px) auto 0", position: "relative", zIndex: 2, alignItems: "end" }}>
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          backgroundImage: `linear-gradient(135deg, rgba(247,168,27,0.6), rgba(105,68,0,0.6)), url(${howDoesItWork})`,
          backgroundBlendMode: "color, normal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 240,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 22,
        }}
      >
        <Link
          to={HOW_TO_USE_URL}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 999, background: "#0050A2", fontSize: 13, fontWeight: 700, color: "#ffffff" }}
        >
          Learn more{" "}
          <span style={{ width: 16, height: 16, borderRadius: 999, background: "#F7A81B", color: "#101820", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
            →
          </span>
        </Link>
      </div>
      <div style={{ borderRadius: 20, background: "#0050A2", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))" }}>
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.tag];
          return (
            <div key={s.tag} className="service-card" style={{ padding: "clamp(20px, 3vw, 30px)", borderRight: "1px solid rgba(255,255,255,0.09)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 999, background: "#F7A81B", color: "#101820", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Icon />
                </div>
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F7A81B", fontWeight: 700 }}>
                  {s.tag}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", color: "#ffffff", margin: "18px 0 8px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#A6BEDF", margin: 0 }}>{s.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
