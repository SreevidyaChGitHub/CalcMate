import { useState, useEffect } from "react";
import axios from 'axios';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const API_URL = 'https://api.frankfurter.dev/v1/latest';
    const getExchangeRates = async (baseCurrency = currency) => {
        try {
            const response = await axios.get(`${API_URL}?base=${baseCurrency}`);
            console.log(`${API_URL}?base=${baseCurrency}`);
            setData(response.data.rates);
            //console.log(response.data.rates);
        }
        catch (error) {
            console.error('Error fetching exchange rates:', error);
            return null;
        }
    }
    useEffect(() => { getExchangeRates(); }, [currency]);
    return data;
};

export default useCurrencyInfo;