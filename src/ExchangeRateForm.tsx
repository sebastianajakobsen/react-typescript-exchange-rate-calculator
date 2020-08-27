import React from 'react';
import ExchangeRateFormOption from "./ExchangeRateFormOption";

interface Props {
    currencies:Array<string>
    currencyOne:string,
    currencyTwo:string
    updateCurrencyOne:(updateCurrencyOne:string) => void,
    updateCurrencyTwo:(updateCurrencyTwo:string) => void,
    amount:number,
    exchangeRate:number,
    updateAmount:(updateAmount:number) => void,
    basicRate:number
    swapCurrencies:() => void;
}



const ExchangeRateForm:React.FC<Props> = ({currencies, currencyOne, currencyTwo, updateCurrencyOne, updateCurrencyTwo, amount, exchangeRate, updateAmount, basicRate, swapCurrencies}) => {



    const handleCurrencyOneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateCurrencyOne(e.target.value)
    }

    const handleCurrencyTwoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateCurrencyTwo(e.target.value)
    }

    const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        updateAmount(parseInt(e.target.value))
    }

    const handleSwapClick = () => {
        swapCurrencies();
    }



    return (
        <div>
            <div className="flex w-full">
                <select  value={currencyOne} onChange={handleCurrencyOneChange} className="lock appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {
                        currencies.map((currency, index) => (
                            <ExchangeRateFormOption  key={index} currency={currency} />
                        ))
                    }
                </select>
                <input onChange={handleAmountChange} value={amount} className="flex-1 ml-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" />
            </div>

            <div className="flex justify-between w-full my-3 text-right items-center">
                <button onClick={handleSwapClick} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Swap</button>
                <p>1 {currencyOne} = {basicRate} {currencyTwo}</p>
            </div>

            <div className="flex w-full">
                <select value={currencyTwo} onChange={handleCurrencyTwoChange} className="lock appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {
                        currencies.map((currency, index) => (
                            <ExchangeRateFormOption key={index} currency={currency} />
                        ))
                    }
                </select>
                <input value={exchangeRate} className="flex-1 ml-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number"/>
            </div>
        </div>
    );
};

export default ExchangeRateForm;
