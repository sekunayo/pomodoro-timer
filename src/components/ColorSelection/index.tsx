import React, { useState } from "react";
import styles from "./ColorSelection.module.css";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

interface ColorSelectionProps {
  color: string;
  currentBackgroundColor: string;
  handleCurrentColor?: (color: string) => void;
}
const ColorSelection = ({
  color,
  currentBackgroundColor,
  handleCurrentColor,
}: ColorSelectionProps) => {
  const isActive = Boolean(currentBackgroundColor === color);

  return (
    <button
      onClick={() => handleCurrentColor?.(color)}
      className={styles.colorSelection}
      style={{
        backgroundColor: color,
      }}
    >
      {Boolean(isActive) && <Check />}
    </button>
  );
};

export default ColorSelection;
