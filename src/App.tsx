import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./counter/counter";
import {SetCounterRange} from './counter/setCounterRange/setCounterRange'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./counter/store/store";
import {
    setMaxCounterValueAC,
    setRangeValueMaxAC,
    setRangeValueStartAC, setValueAC
} from "./counter/store/counter-reducer";



function App() {

    const dispatch = useDispatch()
    const rangeValueStart = useSelector<AppRootStateType, number>(state => state.counterReducer.rangeValueStart)
    const rangeValueMax = useSelector<AppRootStateType, number>(state => state.counterReducer.rangeValueMax)

    const setGoodRange = rangeValueStart >= 0 && rangeValueMax > rangeValueStart

    // localStorage

    useEffect( () => {
        let getFromLocalStorageMinValue = localStorage.getItem('minValue')

        if (getFromLocalStorageMinValue) {
            let newValueMin = JSON.parse(getFromLocalStorageMinValue)
            dispatch(setRangeValueStartAC(newValueMin))
            dispatch(setValueAC(newValueMin))
        }

    }, [dispatch])

    useEffect( () => {
        let getFromLocalStorageMaxValue = localStorage.getItem('maxValue')
        if (getFromLocalStorageMaxValue) {
            let newValueMax = JSON.parse(getFromLocalStorageMaxValue)
            dispatch(setRangeValueMaxAC(newValueMax))
            dispatch(setMaxCounterValueAC(newValueMax))
        }
    }, [dispatch])

    useEffect( () => {
        localStorage.setItem('minValue', JSON.stringify(rangeValueStart))
        localStorage.setItem('maxValue', JSON.stringify(rangeValueMax))
    }, [rangeValueStart, rangeValueMax])



  return (
      <div className="App">
          <div className={'counterWrapper'}>
              <SetCounterRange setGoodRange={setGoodRange}
              />
              <Counter setGoodRange={setGoodRange}
              />
          </div>


      </div>
  );
}

export default App;