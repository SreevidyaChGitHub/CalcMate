import styles from "./ButtonsContainer.module.css";
import React from "react";

let props = {
  onBtnNumOpAcEqClick: (str) => {},
  onBtnBkspClick: () => {},
};

const ButtonsContainer = ({ onBtnNumOpAcEqClick, onBtnBkspClick }) => {
  const numBtnNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operatorBtnNames = ["+", "-", "*", "/"];

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.leftBtns}>
        <div className={styles.numBtns}>
          {numBtnNames.map((numBtnName) => (
            <button
              key={numBtnName}
              className={styles.Numberbutton}
              onClick={() => {
                onBtnNumOpAcEqClick(numBtnName);
              }}
            >
              {numBtnName}
            </button>
          ))}
          <button
            className={styles.imageButton}
            onClick={() => {
              onBtnNumOpAcEqClick("=");
            }}
          >
            =
          </button>
        </div>
        <div className={styles.lastRowBtns}>
          <button
            className={styles.imageButton}
            onClick={() => {
              onBtnNumOpAcEqClick("AC");
            }}
          >
            AC
          </button>
          <button
            className={styles.imageButton}
            onClick={() => onBtnBkspClick()}
          >
            <img src="images/bakspc.svg" />
          </button>
          <button
            className={styles.imageButton}
            onClick={() => {
              onBtnNumOpAcEqClick("+/-");
            }}
          >
            +/-
          </button>
          <button
            className={styles.imageButton}
            onClick={() => {
              onBtnNumOpAcEqClick("%");
            }}
          >
            %
          </button>
        </div>
      </div>
      <div className={styles.rightBtns}>
        {operatorBtnNames.map((operatorBtnName) => (
          <button
            key={operatorBtnName}
            className={styles.imageButton}
            onClick={() => {
              onBtnNumOpAcEqClick(operatorBtnName);
            }}
          >
            {operatorBtnName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
