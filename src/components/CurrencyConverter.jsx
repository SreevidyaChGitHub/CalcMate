import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // This options has all the currencies and rates fetched from the API based on the
  // currency in "from" so this options does not contain the currency in "from",
  // so this options has to be updated for FROM dropdown
  const updatedOptions = [...options, from];

  const convert = () => {
    const ConvertedAmount = (amount * currencyInfo[to]).toFixed(4);
    setConvertedAmount(ConvertedAmount);
  };

  const handleSwapClick = () => {
    const currentFrom = from;
    setFrom(to);
    setTo(currentFrom);
  };
  return (
    <>
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mt-8">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={updatedOptions}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            ></InputBox>
          </div>
          <div className="text-right">
            <button
              className="bg-light-steel-blue text-black px-4 py-1 rounded"
              onClick={handleSwapClick}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-1">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            ></InputBox>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-3/4 bg-light-steel-blue text-black
            rounded-md px-2 py-2"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
          <div className="mt-4 text-center text-white">
            <label className="font-bold">
              {amount} {from} = {convertedAmount} {to}{" "}
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default CurrencyConverter;
