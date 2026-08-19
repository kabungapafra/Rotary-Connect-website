import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import logo from "../assets/rotary-connect-logo-white.png";
import appStoreBadge from "../assets/app-store-badge.svg";
import googlePlayBadge from "../assets/google-play-badge.png";
import { JOIN_URL, HOW_TO_USE_URL, GOOGLE_PLAY_URL, APP_STORE_URL, CONTACT_EMAIL, CONTACT_PHONES } from "../data/siteData";

export default function Footer() {
  return (
    <footer style={{ padding: "clamp(40px, 5vw, 56px) clamp(18px, 4vw, 44px)", background: "#0050A2" }}>
      <div className="grid-footer" style={{ display: "grid", gap: "clamp(28px, 3.5vw, 44px)", maxWidth: 1440, margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="Rotary Connect" style={{ height: 84, width: "auto", display: "block" }} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#A6BEDF", margin: "14px 0 0", maxWidth: "34ch" }}>
            An independent platform built by Rotarians. Not an official publication of Rotary International.
          </p>
          <p style={{ fontSize: 13, color: "#7FA0CC", margin: "10px 0 0" }}>Built by Digiflect Tech.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14, color: "#DCE7F7" }}>
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F7A81B", fontWeight: 700 }}>
            Contact
          </span>
          <span>{CONTACT_EMAIL}</span>
          {CONTACT_PHONES.map((phone) => (
            <span key={phone}>{phone}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "#DCE7F7" }}>
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F7A81B", fontWeight: 700 }}>
            Get the app
          </span>
          <Hoverable as="a" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }} hoverStyle={{ opacity: 0.85 }}>
            <img src={appStoreBadge} alt="Download on the App Store" style={{ width: 135, height: "auto", display: "block" }} />
          </Hoverable>
          <Hoverable as="a" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }} hoverStyle={{ opacity: 0.85 }}>
            <img src={googlePlayBadge} alt="Get it on Google Play" style={{ width: 135, height: "auto", display: "block" }} />
          </Hoverable>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F7A81B", fontWeight: 700 }}>
            Membership
          </span>
          <Hoverable as={Link} to={JOIN_URL} style={{ color: "#ffffff" }} hoverStyle={{ color: "#F7A81B" }}>
            Request to join
          </Hoverable>
          <Hoverable as={Link} to={HOW_TO_USE_URL} style={{ color: "#DCE7F7" }} hoverStyle={{ color: "#F7A81B" }}>
            Getting started
          </Hoverable>
          <Hoverable as="a" href="/#faq" style={{ color: "#DCE7F7" }} hoverStyle={{ color: "#F7A81B" }}>
            FAQ
          </Hoverable>
        </div>
      </div>
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingTop: 32, marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <p style={{ fontSize: 12.5, color: "#7FA0CC", margin: 0, textAlign: "center" }}>
          © {new Date().getFullYear()} Digiflect Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
