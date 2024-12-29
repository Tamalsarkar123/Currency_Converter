 import { useId } from "react";

export const InputBox=(
   {label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[], // don't crash app
    selectCurrency="usd",
    amountDisable=false,
    CurrencyDisable=false,
    className=""}
)=>{
    const amountInputId=useId();
    return(
        <div className={`bg-white p-3 rounded-lg b text-sm flex ${className}`}>
            <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
            {label}
            </label>
            <input id={amountInputId} className="outline-none w-full bg-transparent" type="number" placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e)=>onAmountChange&& onAmountChange(Number(e.target.value))}>
            </input>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={CurrencyDisable} 
                >{

                   currencyOptions.map((currency)=>(
                    <option value={currency} key={currency}>
                    {currency}
                    </option>
                   ))
                }
                </select>
            </div>
        </div>
    )
}