import React, { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import ButtonsContainer from "./ButtonsContainer";
import { evaluate } from "mathjs";
import styles from "./Calculator.module.css";

function Calculator() {
  const [inpVal, setInpVal] = useState("");
  const [resVal, setResVal] = useState("");

  const handleBtnNumOpAcEqClick = (buttonText) => {
    if (buttonText === "=") {
      const res = evaluateExpression(inpVal);
      setResVal(res);
      setInpVal(inpVal + "=");
    } else if (buttonText === "AC") {
      setInpVal("");
      setResVal("");
    } else if (buttonText === "%") {
      setResVal(inpVal / 100);
    } else if (buttonText === "+/-") {
      setResVal(parseFloat(inpVal) * -1);
    } else {
      if (isNaN(buttonText)) {
        if (inpVal.charAt(inpVal.length - 1) === "=") {
          setInpVal(resVal + buttonText);
          setResVal("");
          return;
        }
      }
      const newDispValue = inpVal + buttonText;
      setInpVal(newDispValue);
    }
  };

  const handleBtnBkspClick = () => {
    setInpVal(inpVal.slice(0, -1));
  };

  const evaluateExpression = (expr) => {
    try {
      const result = evaluate(expr);
      return result;
    } catch (error) {
      return "Invalid Expression";
    }
  };

  return (
    <>
      <div className={styles.Calculator}>
        <DisplayContainer
          inputValue={inpVal}
          resultValue={resVal}
        ></DisplayContainer>
        <ButtonsContainer
          onBtnNumOpAcEqClick={handleBtnNumOpAcEqClick}
          onBtnBkspClick={handleBtnBkspClick}
        ></ButtonsContainer>
      </div>
    </>
  );
}

export default Calculator;
