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
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap", padding: "22px 44px" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: 112 }}>
        <img
          src={logo}
          alt="Rotary Connect"
          style={{ height: 108, width: "auto", display: "block" }}
        />
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 999, background: "rgba(255,255,255,0.07)", fontSize: 14, fontWeight: 500, minWidth: 0, flexWrap: "wrap", justifyContent: "center" }}>
        {NAV_LINKS.map((link) => (
          <Hoverable
            as="a"
            key={link.href}
            href={link.href}
            style={{ padding: "9px 16px", borderRadius: 999, color: "#E4EDF9" }}
            hoverStyle={{ background: "rgba(247,168,27,0.16)", color: "#ffffff" }}
          >
            {link.label}
          </Hoverable>
        ))}
      </nav>
      <Hoverable
        as={Link}
        to={JOIN_URL}
        style={{ display: "inline-flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", padding: "13px 22px", borderRadius: 999, background: "#ffffff", color: "#101820", fontWeight: 700, fontSize: 14 }}
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
