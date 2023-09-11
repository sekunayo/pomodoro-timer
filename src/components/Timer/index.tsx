import React from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer__progress_outer}>
        <div className={styles.timer__progress_inner}>
          <svg xmlns="http://www.w3.org/2000/svg" width="410" height="410">
            <circle cx="180" cy="180" r="170" stroke-linecap="round" />
          </svg>

          <div className={styles.timer__content}>
            <h4 className={styles.timer__content_text}>23:24</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
