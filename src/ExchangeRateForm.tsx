import React from 'react';
import ExchangeRateFormOption from "./ExchangeRateFormOption";

interface Props {
    currencies:Array<string>
    currencyOne:string,
    currencyTwo:string
    updateCurrencyOne:(updateCurrencyOne:string) => void;
    updateCurrencyTwo:(updateCurrencyTwo:string) => void;
}


const ExchangeRateForm:React.FC<Props> = ({currencies, currencyOne, currencyTwo, updateCurrencyOne, updateCurrencyTwo}) => {

    const handleCurrencyOneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateCurrencyOne(e.target.value)
    }


    const handleCurrencyTwoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateCurrencyTwo(e.target.value)
    }


    return (
        <form>
            <div className="flex w-full">
                <select defaultValue={currencyOne} onChange={handleCurrencyOneChange}>
                    {
                        currencies.map((currency, index) => (
                            <ExchangeRateFormOption key={index} currency={currency} />
                        ))
                    }
                </select>
                <input className="flex-1" type="number"/>
            </div>

            <div className="flex w-full">
                <select defaultValue={currencyTwo} onChange={handleCurrencyTwoChange}>
                    {
                        currencies.map((currency, index) => (
                            <ExchangeRateFormOption key={index} currency={currency} />
                        ))
                    }
                </select>
                <input className="flex-1" type="number"/>
            </div>
        </form>
    );
};

export default ExchangeRateForm;
