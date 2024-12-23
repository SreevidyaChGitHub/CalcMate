import React, { useId, useEffect } from "react";
import "./CurrencyConverter.css";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();
  const uniqueCurrencyOptions = Array.from(new Set(currencyOptions));

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => {
            const newCurrency = e.target.value.toString();
            onCurrencyChange(newCurrency);
          }}
          disabled={currencyDisabled}
          value={selectedCurrency}
        >
          {uniqueCurrencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
