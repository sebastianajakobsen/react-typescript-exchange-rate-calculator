import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ExchangeRateForm from "./ExchangeRateForm";


const App: React.FC = () => {
    const [currencies] = useState<string[]>(
        [
            "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK",
            "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW",
            "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB",
            "TRY", "TWD", "UAH", "USD", "UYU", "VND", "ZAR"
        ]
    )
    const [rates, setRates] = useState<number[]>([])
    const [exchangeRate, setExchangeRate] = useState<number>(0)
    const [currencyOne, setCurrencyOne] = useState<string>("DKK")
    const [currencyTwo, setCurrencyTwo] = useState<string>("USD")
    const [amount, setAmount] = useState<number>(1)

    useEffect(() => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
            .then(res => {
                setRates(res.data.rates)
                setExchangeRate((res.data.rates[currencyTwo] * amount))
            })
    }, [amount, currencyOne, currencyTwo])

    const updateCurrencyOne = (currency:string) => {
        setCurrencyOne(currency)
    }

    const updateCurrencyTwo = (currency:string) => {
        setCurrencyTwo(currency)
    }


    return (
        <div className="flex justify-center py-10">
            <div className="w-full max-w-xs">
                <h1 className="text-2xl font-bold text-center">Exchange Rate Calculator</h1>
                <p className="text-center">Choose the currency and the amounts to get the exchange rate</p>

                <ExchangeRateForm updateCurrencyTwo={updateCurrencyTwo} updateCurrencyOne={updateCurrencyOne} currencies={currencies} currencyOne={currencyOne} currencyTwo={currencyTwo}/>
            </div>
        </div>

    );
}

export default App;
