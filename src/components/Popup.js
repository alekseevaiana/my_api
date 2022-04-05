import Close from "../ui-components/Close";
import { useEffect, useState } from "react";

export default function Popup({ children, title, onClose, display }) {
  return (
    <div
      className="popup"
      id="popup"
      style={{
        position: "fixed",
        width: "361px",
        background: "#FAFAFA",
        border: "1px solid #E5E5E5",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        padding: "20px",
        display: display,
        backdropFilter: "blur(8px)",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "15%",
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
