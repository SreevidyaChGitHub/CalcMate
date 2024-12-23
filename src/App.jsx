import "./App.css";
import React, { useState } from "react";
import Calculator from "./components/Calculator";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [selectedValue, setSelectedValue] = useState("calc");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <div className="dispComp">
        <h1
          style={{
            fontWeight: "bold",
            height: "30px",
            backgroundColor: "steelblue",
          }}
        >
          CalcMate
        </h1>
        <div className="modePanel">
          <label htmlFor="dropdown" style={{ fontWeight: "bold" }}>
            Mode:
          </label>
          <select
            id="dropdown"
            style={{ backgroundColor: "lightsteelblue" }}
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="calc">Standard Calculator</option>
            <option value="convert">Currency Converter</option>
          </select>
        </div>
        {selectedValue === "calc" && <Calculator />}
        {selectedValue === "convert" && <CurrencyConverter />}
      </div>
    </>
  );
}

export default App;
