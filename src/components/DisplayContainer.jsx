import styles from "./DisplayContainer.module.css";
import React from "react";

const DisplayContainer = ({ inputValue, resultValue }) => {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.inputLine}>{inputValue}</div>
      <div className={styles.resultLine}>{resultValue}</div>
    </div>
  );
};

export default DisplayContainer;
