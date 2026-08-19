import { useState } from "react";

export default function Hoverable({ as: Tag = "div", style, hoverStyle, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const merged = hover && hoverStyle ? { ...style, ...hoverStyle } : style;
  return (
    <Tag
      style={merged}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
