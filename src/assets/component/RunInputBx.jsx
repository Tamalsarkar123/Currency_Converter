import { useState } from "react"
import { InputBox } from "../component"
import useCurrencyInfo from "../hooks/useCurrencyInfo"


export const RunInputBx = () => {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertamt, setConvertAmt] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertAmt(amount);
        setAmount(convertamt);
    }

    const convert = () => {
        setConvertAmt(amount * currencyInfo[to])
    }
    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center "
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg    p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="from"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                    setAmount(amount);
                                }}
                                onAmountChange={(amount)=>{
                                    setAmount(amount);
                                }}
                                selectCurrency={from}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button type="button " className=" absolute left-36 bottom-0 translate-x-1/2 translate-y-1/2 border border-white rounded-lg bg-blue-600 text-white px-2 py-1"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertamt}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                    setTo(currency);
                                }}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-orange-500 px-4 py-3">
                            CONVERT  {from.toUpperCase()} to {to.toUpperCase()}
                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}