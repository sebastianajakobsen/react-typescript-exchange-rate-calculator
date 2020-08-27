import React from 'react';
import ExchangeRateFormOption from "./ExchangeRateFormOption";

interface Props {
    currencies:Array<string>
    currencyOne:string,
    currencyTwo:string
}

const ExchangeRateForm:React.FC<Props> = ({currencies, currencyOne, currencyTwo}) => {
    return (
        <div>
            <div className="flex w-full">
                <select value={currencyOne}>
                    {
                        currencies.map(currency => (
                            <ExchangeRateFormOption currency={currency} />
                        ))
                    }
                </select>
                <input className="flex-1" type="number"/>
            </div>

            <div className="flex w-full">
                <select value={currencyTwo}>
                    {
                        currencies.map(currency => (
                            <ExchangeRateFormOption currency={currency} />
                        ))
                    }
                </select>
                <input className="flex-1" type="number"/>
            </div>
        </div>
    );
};

export default ExchangeRateForm;
