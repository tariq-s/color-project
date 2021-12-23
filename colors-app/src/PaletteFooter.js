import React from "react";

export default function PaletteFooter({ paletteName, emoji }) {
  return (
    <footer className="palette-footer">
      {paletteName} {emoji}
    </footer>
  );
}
