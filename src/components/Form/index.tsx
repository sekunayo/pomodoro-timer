import React, { useState } from "react";
import styles from "./Form.module.css";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import FontSelection from "../FontSelection";
import ColorSelection from "../ColorSelection";

interface FormProps {
  fontValue: string;
  color: string;
  handleCurrentColor: (color: string) => void;
  handleCurrentFont: (font: string) => void;
  handleClose?: () => void;
}

const colors = ["#F87070", "#70F3F8", "#D881F8"];
const fonts = ["Kumbh Sans", "Roboto Slab", "Space Mono"];

const Form = ({
  fontValue,
  color,
  handleCurrentColor,
  handleCurrentFont,
  handleClose,
}: FormProps) => {
  return (
    <div className={styles.form}>
      <div className={styles.form__header}>
        <h4 className={styles.form__header_title}>Settings</h4>
        <button onClick={handleClose}>
          <Close />
        </button>
      </div>

      <div className={styles.form__container}>
        <div className={styles.form__row}>
          <h4 className={styles.form__row_title}>font</h4>

          <div className={styles.form__row_inner}>
            {fonts.map((font) => {
              return (
                <FontSelection
                  fontValue={font}
                  currentFontValue={fontValue}
                  handleCurrentFont={handleCurrentFont}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.form__row}>
          <h4 className={styles.form__row_title}>color</h4>

          <div className={styles.form__row_inner}>
            {colors.map((colorValue) => {
              return (
                <ColorSelection
                  color={colorValue}
                  currentBackgroundColor={color}
                  handleCurrentColor={handleCurrentColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
