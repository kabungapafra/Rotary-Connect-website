import { useState } from "react";
import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import logo from "../assets/rotary-connect-logo-white.png";
import { JOIN_URL } from "../data/siteData";

const NAV_LINKS = [
  { href: "/#mission", label: "How it works" },
  { href: "/#projects", label: "Projects" },
  { href: "/#events", label: "Events" },
  { href: "/#news", label: "News" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // The nav's own display is set in index.css, not here: below the
    // breakpoint it collapses behind the menu button, and an inline
    // display would beat the media query that hides it.
    <header className="site-header" style={{ alignItems: "center", justifyContent: "space-between", gap: 14, padding: "clamp(14px, 2.5vw, 22px) clamp(18px, 4vw, 44px)" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: "clamp(0px, 7vw, 112px)" }}>
        <img
          src={logo}
          alt="Rotary Connect"
          style={{ height: "clamp(58px, 8.5vw, 108px)", width: "auto", display: "block" }}
        />
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
        style={{ alignItems: "center", justifyContent: "center", gap: 5, width: 44, height: 44, borderRadius: 12, border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.08)", cursor: "pointer", flexDirection: "column" }}
      >
        {/* Three bars that fold into a cross when open — no icon font needed. */}
        <span style={{ width: 18, height: 2, borderRadius: 2, background: "#ffffff", transition: "transform .2s, opacity .2s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
        <span style={{ width: 18, height: 2, borderRadius: 2, background: "#ffffff", transition: "opacity .2s", opacity: menuOpen ? 0 : 1 }} />
        <span style={{ width: 18, height: 2, borderRadius: 2, background: "#ffffff", transition: "transform .2s, opacity .2s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
      </button>

      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        style={{ alignItems: "center", gap: 8, padding: "7px 10px", background: "rgba(255,255,255,0.07)", fontSize: 14, fontWeight: 500, minWidth: 0 }}
      >
        {NAV_LINKS.map((link) => (
          <Hoverable
            as="a"
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ padding: "9px 16px", borderRadius: 999, color: "#E4EDF9" }}
            hoverStyle={{ background: "rgba(247,168,27,0.16)", color: "#ffffff" }}
          >
            {link.label}
          </Hoverable>
        ))}
        <Hoverable
          as={Link}
          to={JOIN_URL}
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
          style={{ alignItems: "center", justifyContent: "center", gap: 10, marginTop: 6, padding: "13px 22px", borderRadius: 999, background: "#ffffff", color: "#101820", fontWeight: 700, fontSize: 14 }}
          hoverStyle={{ background: "#F7A81B", color: "#101820" }}
        >
          Request to join{" "}
          <span style={{ width: 18, height: 18, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 11, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
            →
          </span>
        </Hoverable>
      </nav>

      <Hoverable
        as={Link}
        to={JOIN_URL}
        className="header-cta"
        style={{ alignItems: "center", gap: 10, whiteSpace: "nowrap", padding: "13px 22px", borderRadius: 999, background: "#ffffff", color: "#101820", fontWeight: 700, fontSize: 14 }}
        hoverStyle={{ background: "#F7A81B", color: "#101820" }}
      >
        Request to join{" "}
        <span style={{ width: 18, height: 18, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 11, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
          →
        </span>
      </Hoverable>
    </header>
  );
}
