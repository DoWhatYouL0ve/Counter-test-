import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter/counter";
import {SetCounterRange} from './counter/setCounterRange/setCounterRange'



function App() {

    // code to set the range for the counter
    const [rangeValueStart, setRangeValueStart] = useState<number>(0)
    const [rangeValueMax, setRangeValueMax] = useState<number>(1)
    const [rangeSetDisabled, setRangeSetDisabled] = useState<boolean>(true)
    const [onFocusError, setOnFocusError] = useState<boolean>(false)

    // code for the counter
    let [value, setValue] = useState<number>(0)
    const [disabledValue, setDisabledValue] = useState<boolean>(true)

    let [maxCounterValue, setMaxCounterValue] = useState<number>(5)

    const newValueCounter = () => {
        if (value < maxCounterValue)  {
            setValue(value + 1)
            setDisabledValue(false)
        }
    }

    const resetValueCounter = () => {
        setValue(rangeValueStart)
        setDisabledValue(true)
    }

    // code to set the range for the counter

    const onChangeMax = (body: number) => {
        setRangeValueMax(body)
        setRangeSetDisabled(false)
    }

    const onChangeStart = (body: number) => {
        setRangeValueStart(body)
        setRangeSetDisabled(false)
    }

    const setRange = () => {
        setValue(rangeValueStart)
        setMaxCounterValue(rangeValueMax)
        setRangeSetDisabled(true)
    }

    const onFocus = () => {
        setOnFocusError(true)
    }

    const setGoodRange = rangeValueStart >= 0 && rangeValueMax > rangeValueStart

    // localStorage

    useEffect( () => {
        let getFromLocalStorageMinValue = localStorage.getItem('minValue')

        if (getFromLocalStorageMinValue) {
            let newValueMin = JSON.parse(getFromLocalStorageMinValue)
            setRangeValueStart(newValueMin)
            setValue(newValueMin)
        }

    }, [])

    useEffect( () => {
        let getFromLocalStorageMaxValue = localStorage.getItem('maxValue')
        if (getFromLocalStorageMaxValue) {
            let newValueMax = JSON.parse(getFromLocalStorageMaxValue)
            setRangeValueMax(newValueMax)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('minValue', JSON.stringify(rangeValueStart))
        localStorage.setItem('maxValue', JSON.stringify(rangeValueMax))
    }, [rangeValueStart, rangeValueMax])



  return (
      <div className="App">
          <div className={'counterWrapper'}>
              <SetCounterRange rangeValueStart={rangeValueStart}
                               rangeValueMax={rangeValueMax}
                               onChangeMax={onChangeMax}
                               onChangeStart={onChangeStart}
                               setRange={setRange}
                               setGoodRange={setGoodRange}
                               rangeSetDisabled={rangeSetDisabled}
                               onFocus={onFocus}
                               onFocusError={onFocusError}
              />
              <Counter resetValueCounter={resetValueCounter}
                       value={value}
                       newValueCounter={newValueCounter}
                       disabledValue={disabledValue}
                       maxCounterValue={maxCounterValue}
                       setGoodRange={setGoodRange}
                       rangeSetDisabled={rangeSetDisabled}
              />
          </div>


      </div>
  );
}

export default App;