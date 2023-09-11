import React from "react";
import styles from "./Selection.module.css";

interface SelectionProps {
  children: string | JSX.Element;
  backgroundColor: string;
  color: string;
}
const Selection = ({ children, backgroundColor, color }: SelectionProps) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className={styles.selection}
    >
      {children}
    </button>
  );
};

export default Selection;
