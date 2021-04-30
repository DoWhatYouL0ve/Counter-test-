import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/counter";
import {SetCounterRange} from './counter/setCounterRange/setCounterRange'


function App() {
    // code for the counter
    let [value, setValue] = useState<number>(0)
    const [disabledValue, setDisabledValue] = useState<boolean>(true)

    let [maxCounterValue, setMaxCounterValue] = useState(5)

    const newValueCounter = () => {
        if (value < maxCounterValue)  {
            setValue(value + 1)
            setDisabledValue(false)
        }
    }

    const resetValueCounter = () => {
        setValue(0)
        setDisabledValue(true)
    }

    // code to set the range for the counter
    const [rangeValueStart, setRangeValueStart] = useState(0)
    const [rangeValueMax, setRangeValueMax] = useState(1)
    const [rangeSetDisabled, setRangeSetDisabled] = useState(false)

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

    const setGoodRange = rangeValueStart >= 0 && rangeValueMax > rangeValueStart



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
              />
              <Counter resetValueCounter={resetValueCounter}
                       value={value}
                       newValueCounter={newValueCounter}
                       disabledValue={disabledValue}
                       maxCounterValue={maxCounterValue}
                       setGoodRange={setGoodRange}
              />
          </div>


      </div>
  );
}

export default App;