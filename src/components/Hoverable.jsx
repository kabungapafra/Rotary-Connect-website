import { useState } from "react";

// Swapping the whole style object made every hover land in one frame, so
// buttons and links snapped between colours. Easing the properties that
// actually change keeps that behaviour but makes it feel like a control
// rather than a redraw. Callers can still override `transition`.
const EASE = "background .18s ease, color .18s ease, opacity .18s ease, border-color .18s ease, box-shadow .18s ease, transform .18s ease";

export default function Hoverable({ as: Tag = "div", style, hoverStyle, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const merged = hover && hoverStyle ? { ...style, ...hoverStyle } : style;
  return (
    <Tag
      style={{ transition: EASE, ...merged }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
