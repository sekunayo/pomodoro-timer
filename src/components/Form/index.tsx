import React from "react";
import styles from "./Form.module.css";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__header}>
        <h4 className={styles.form__header_title}>Settings</h4>
        <Close />
      </div>
    </div>
  );
};

export default Form;
