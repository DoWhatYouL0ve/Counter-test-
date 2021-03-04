import './counter.modules.css'
import {useState} from "react";

export const Counter = () => {
    const [value, setValue] = useState(0)
    const [disabledValue, setDisabledValue] = useState(true)

    const newValueCounter = () => {
        if (value < 5)  {
            setValue(value + 1)
            setDisabledValue(false)
        }
    }

    const resetValueCounter = () => {
        setValue(0)
        setDisabledValue(true)
    }



    return (
        <div className={'wrapper'}>
            <div className={'amount'}>
                <h2 className={value === 5 ? 'red' : undefined}>{value}</h2>
            </div>
            <div className={'buttonWrapper'}>
                <button onClick={newValueCounter}>Raise</button>
                <button onClick={resetValueCounter} disabled={disabledValue}>Reset</button>
            </div>
        </div>
    )
}