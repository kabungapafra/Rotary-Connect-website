import { Link } from "react-router-dom";
import Hoverable from "./Hoverable";
import { JOIN_URL, HOW_TO_USE_URL, GOOGLE_PLAY_URL, APP_STORE_URL } from "../data/siteData";
import appStoreBadge from "../assets/app-store-badge.svg";
import googlePlayBadge from "../assets/google-play-badge.png";
import heroAppScreens from "../assets/hero-app-screens.png";
import { QRIcon, AIIcon } from "./icons";

export default function Hero() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "clamp(28px, 4vw, 48px)", alignItems: "center", padding: "clamp(32px, 5vw, 56px) clamp(18px, 4vw, 44px) 0", maxWidth: 1440, margin: "0 auto" }}>
      <div>
        <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "rgba(247,168,27,0.14)", color: "#F7A81B", fontSize: 13, fontWeight: 600 }}>
          Welcome to Rotary Connect
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(34px, 7vw, 62px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.035em", color: "#ffffff", margin: "22px 0 0", maxWidth: "17ch", textWrap: "pretty" }}>
          Run Your Club From Your Phone
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: "#B9CCE8", maxWidth: "48ch", margin: "20px 0 0" }}>
          Attendance, events, dues, minutes and members — one app your whole club actually uses. Check in by scanning a QR code at the door.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
          <Hoverable
            as={Link}
            to={JOIN_URL}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", padding: "15px 26px", borderRadius: 999, background: "#F7A81B", color: "#101820", fontWeight: 700, fontSize: 15 }}
            hoverStyle={{ background: "#FFC745", color: "#101820" }}
          >
            Let's get started{" "}
            <span style={{ width: 20, height: 20, borderRadius: 999, background: "#17458F", color: "#F7A81B", fontSize: 11, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              →
            </span>
          </Hoverable>
          <Hoverable
            as={Link}
            to={HOW_TO_USE_URL}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#ffffff", fontWeight: 600, fontSize: 15 }}
            hoverStyle={{ color: "#F7A81B" }}
          >
            <span style={{ width: 44, height: 44, borderRadius: 999, background: "#ffffff", color: "#101820", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>
              ▶
            </span>{" "}
            Getting started
          </Hoverable>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
          <Hoverable as="a" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }} hoverStyle={{ opacity: 0.85 }}>
            <img src={appStoreBadge} alt="Download on the App Store" style={{ height: 50, width: "auto", display: "block" }} />
          </Hoverable>
          <Hoverable as="a" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }} hoverStyle={{ opacity: 0.85 }}>
            <img src={googlePlayBadge} alt="Get it on Google Play" style={{ height: 50, width: "auto", display: "block" }} />
          </Hoverable>
        </div>
      </div>

      <div className="hero-figure" style={{ position: "relative" }}>
        <img
          src={heroAppScreens}
          alt="Rotary Connect app — club home screen and QR meeting check-in"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className="hero-badges">
        <div className="hero-badge hero-badge--qr" style={{ background: "#ffffff", borderRadius: 18, padding: "clamp(14px, 2vw, 18px) clamp(16px, 2.4vw, 22px)", boxShadow: "0 20px 40px -22px rgba(0,0,0,0.5)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 26, height: 26, borderRadius: 999, background: "#F7A81B", color: "#101820", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <QRIcon size={15} />
            </span>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(17px, 2.4vw, 22px)", fontWeight: 800, letterSpacing: "-0.03em" }}>QR check-in</div>
          </div>
          <div style={{ fontSize: 12.5, color: "#4A5A6B", marginTop: 2 }}>Recorded before they sit down</div>
        </div>
        <div className="hero-badge hero-badge--ai" style={{ background: "#F7A81B", borderRadius: 18, padding: "clamp(14px, 2vw, 18px) clamp(16px, 2.6vw, 24px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 26, height: 26, borderRadius: 999, background: "#17458F", color: "#F7A81B", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <AIIcon size={15} />
            </span>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(17px, 2.4vw, 22px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#101820" }}>AI minutes</div>
          </div>
          <div style={{ fontSize: 12.5, color: "#4A3200", marginTop: 2 }}>Drafted right after the meeting</div>
        </div>
        </div>
      </div>
    </section>
  );
}
