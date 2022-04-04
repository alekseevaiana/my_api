import Close from "../ui-components/Close";
import { useEffect, useState } from "react";

export default function Popup({ children, title, onClose, display }) {
  return (
    <div
      style={{
        position: "relative",
        width: "361px",
        background: "#FAFAFA",
        border: "1px solid #E5E5E5",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        padding: "20px",
        display: display,
      }}
    >
      <Close
        style={{ marginLeft: "auto" }}
        overrides={{
          Close: {
            onClick: onClose,
          },
        }}
      />
      <div>{title}</div>
      {children}
    </div>
  );
}
