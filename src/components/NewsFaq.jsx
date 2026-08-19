import { useState } from "react";
import { FAQ_SOURCE } from "../data/siteData";
import { useNews } from "../data/useSiteContent";

export default function NewsFaq() {
  const [openFaq, setOpenFaq] = useState(0);
  const news = useNews();
  // The FAQ shares this section, so an empty news list drops just that
  // column and lets the FAQ take the full width — never hides both.
  const showNews = news !== null && news.length > 0;

  return (
    <section id="news" className="reveal" style={{ padding: "clamp(52px, 7vw, 80px) clamp(18px, 4vw, 44px)", background: "#ffffff" }}>
      <div style={{ display: "grid", gridTemplateColumns: showNews ? "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" : "1fr", gap: "clamp(32px, 4vw, 56px)", maxWidth: 1440, margin: "0 auto" }}>
        {showNews && (
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.035em", margin: 0 }}>
            News &amp; Updates
          </h2>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>
            {news.map((n) => (
              <div key={n.title} style={{ padding: "20px 0", borderTop: "1px solid #E9EDF4", display: "grid", gridTemplateColumns: "92px 1fr", gap: 20, alignItems: "baseline" }}>
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11.5, color: "#8494A6", whiteSpace: "nowrap" }}>
                  {n.date}
                </span>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 17, fontWeight: 700, lineHeight: 1.35, letterSpacing: "-0.02em" }}>
                    {n.title}
                  </div>
                  <div style={{ fontSize: 14.5, color: "#4A5A6B", marginTop: 5, lineHeight: 1.6 }}>{n.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
        <div id="faq">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.035em", margin: 0 }}>
            FAQ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {FAQ_SOURCE.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  style={{ padding: "20px 24px", borderRadius: 18, background: "#F2F5F9", cursor: "pointer" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {f.q}
                    </span>
                    <span style={{ width: 26, height: 26, borderRadius: 999, background: "#F7A81B", color: "#101820", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      {open ? "−" : "+"}
                    </span>
                  </div>
                  {open && (
                    <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A5A6B", margin: "12px 0 0", maxWidth: "52ch" }}>
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
