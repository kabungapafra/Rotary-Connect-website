import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import { JOIN_URL } from "../data/siteData";

export default function CtaBanner() {
  return (
    <section className="reveal" style={{ padding: "clamp(44px, 6vw, 64px) clamp(18px, 4vw, 44px) 40px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", borderRadius: 26, background: "#17458F", padding: 56, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 38, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, maxWidth: "20ch" }}>
            Put Your Club On The Map
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#B9CCE8", margin: "14px 0 0", maxWidth: "46ch" }}>
            One officer, one form, about a week to get set up. Talk to us about pricing.
          </p>
        </div>
        <Hoverable
          as={Link}
          to={JOIN_URL}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", padding: "16px 28px", borderRadius: 999, background: "#F7A81B", color: "#101820", fontWeight: 700, fontSize: 15 }}
          hoverStyle={{ background: "#ffffff", color: "#101820" }}
        >
          Request to join{" "}
          <span style={{ width: 20, height: 20, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 11, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
            →
          </span>
        </Hoverable>
      </div>
    </section>
  );
}
