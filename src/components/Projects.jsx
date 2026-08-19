import { useProjects } from "../data/useSiteContent";

export default function Projects() {
  const projects = useProjects();
  if (projects === null || projects.length === 0) return null;
  return (
    <section id="projects" style={{ padding: "clamp(52px, 7vw, 80px) clamp(18px, 4vw, 44px)", background: "#ffffff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="grid-projects-head" style={{ display: "grid", gap: "clamp(24px, 4vw, 56px)", alignItems: "end" }}>
          <div>
            <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "#FDF1D8", color: "#7A5200", fontSize: 13, fontWeight: 600 }}>
              Service projects
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.035em", margin: "18px 0 0", maxWidth: "24ch" }}>
              Projects Across Our Clubs
            </h2>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A5A6B", margin: 0 }}>
            Scope, progress, deadlines and photos — updated by each club as the work happens.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20, marginTop: 40 }}>
          {projects.map((p) => (
            <div key={p.title} style={{ borderRadius: 22, overflow: "hidden", background: "#F2F5F9", display: "flex", flexDirection: "column" }}>
              {/* The striped pattern is the fallback for a project with
                  no uploaded photo — it was the only thing here before
                  photos became admin-managed. */}
              <div style={{ position: "relative", height: 200, background: "repeating-linear-gradient(135deg,#DCE3EC 0 12px,#CFD8E6 12px 24px)", display: "flex", alignItems: "flex-end", padding: 16 }}>
                {p.photoUrl && (
                  <img
                    src={p.photoUrl}
                    alt={p.photo || p.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {p.photo && (
                  <span style={{ position: "relative", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#101820", background: "#ffffff", padding: "6px 11px", borderRadius: 999 }}>
                    {p.photo}
                  </span>
                )}
              </div>
              <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 999, background: "#F7A81B", color: "#101820", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 11.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p.tag}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#A8720F" }}>{p.area}</span>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-0.025em", margin: "4px 0 0" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4A5A6B", margin: "0 0 10px" }}>{p.body}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: "auto", paddingTop: 16, borderTop: "1px solid #DCE3EC", fontSize: 13.5, color: "#8494A6" }}>
                  <span>{p.progress}</span>
                  <span style={{ fontWeight: 700, color: "#0050A2" }}>{p.deadline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
