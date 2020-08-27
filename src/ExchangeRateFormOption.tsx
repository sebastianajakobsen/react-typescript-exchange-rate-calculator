import React from 'react';

interface Props {
    currency:string,
}


const ExchangeRateFormOption:React.FC<Props> = ({currency}) => {
    return (
        <option>
            {currency}
        </option>
    );
};

export default ExchangeRateFormOption;
