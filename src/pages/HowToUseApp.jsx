import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import { ROLE_GUIDES, PILLARS } from "../data/siteData";

export default function HowToUseApp() {
  return (
    <div style={{ background: "#F2F5F9" }}>
      <div style={{ background: "#17458F", padding: "0 0 56px" }}>
        <Header />
        <section style={{ padding: "40px clamp(18px, 4vw, 44px) 0", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "rgba(247,168,27,0.14)", color: "#F7A81B", fontSize: 13, fontWeight: 600 }}>
            Guide
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(32px, 6vw, 46px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", color: "#ffffff", margin: "20px 0 0", maxWidth: "20ch" }}>
            How To Use The App
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#B9CCE8", maxWidth: "56ch", margin: "16px 0 0" }}>
            A quick walkthrough for every role in your club — members, visiting guests, the Secretary, the President and the Treasurer.
          </p>
        </section>
      </div>

      <section style={{ padding: "0 clamp(18px, 4vw, 44px) 88px", marginTop: -32 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
            {ROLE_GUIDES.map((r) => (
              <div key={r.role} style={{ borderRadius: 22, background: "#ffffff", padding: "clamp(20px, 3vw, 30px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 999, background: "#F7A81B", color: "#101820", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 12.5, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    {r.tag}
                  </span>
                  <div>
                    <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>
                      {r.role}
                    </h2>
                    <div style={{ fontSize: 13, color: "#A8720F", fontWeight: 600, marginTop: 2 }}>{r.summary}</div>
                  </div>
                </div>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {r.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#4A5A6B" }}>
                      <span style={{ width: 17, height: 17, borderRadius: 999, background: "#F2F5F9", color: "#0050A2", fontSize: 10, fontWeight: 700, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(18px, 4vw, 44px) 88px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "#FDF1D8", color: "#7A5200", fontSize: 13, fontWeight: 600 }}>
            Recap
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", margin: "18px 0 0" }}>
            From Setup To Your First Meeting
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))", gap: 20, marginTop: 32 }}>
            {PILLARS.map((p) => (
              <div key={p.n}>
                <div style={{ width: 36, height: 36, borderRadius: 999, background: "#F7A81B", color: "#101820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 12 }}>
                  {p.n}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15.5, fontWeight: 700, letterSpacing: "-0.02em", margin: "12px 0 6px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "#4A5A6B", margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
