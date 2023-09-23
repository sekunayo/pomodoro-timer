import React, { useState } from "react";
import styles from "./FontSelection.module.css";

interface FontSelectionProps {
  fontValue: string;
  currentFontValue: string;
  handleCurrentFont?: (font: string) => void;
}
const FontSelection = ({
  fontValue,
  handleCurrentFont,
  currentFontValue,
}: FontSelectionProps) => {
  const isActive = Boolean(currentFontValue === fontValue);

  console.log(currentFontValue);

  return (
    <div className={styles.fontSelection__container}>
      <button
        onClick={() => handleCurrentFont?.(fontValue)}
        className={styles.fontSelection}
        style={{
          fontFamily: fontValue,
        }}
      >
        Aa
      </button>

      {isActive && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="24.5" stroke="#EFF1FA" />
        </svg>
      )}
    </div>
  );
};

export default FontSelection;
