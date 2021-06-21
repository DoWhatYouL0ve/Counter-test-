import s from './counter.module.css'
import {Display} from './counterDisplay/display'
import {Button} from "./counterButton/button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setDisabledValueAC, setValueAC} from "./store/counter-reducer";


type CounterType = {
    setGoodRange: boolean
}

export const Counter = (props: CounterType) => {

    const dispatch = useDispatch()
    const rangeSetDisabled = useSelector<AppRootStateType, boolean>(state => state.counterReducer.rangeSetDisabled)
    const value = useSelector<AppRootStateType, number>(state => state.counterReducer.value)
    const disabledValue = useSelector<AppRootStateType, boolean>(state => state.counterReducer.disabledValue)
    const maxCounterValue = useSelector<AppRootStateType, number>(state => state.counterReducer.maxCounterValue)
    const rangeValueStart = useSelector<AppRootStateType, number>(state => state.counterReducer.rangeValueStart)

    const newValueCounter = () => {
        if (value < maxCounterValue)  {
            dispatch(setValueAC(value + 1))
            dispatch(setDisabledValueAC(false))
        }
    }

    const resetValueCounter = () => {
        dispatch(setValueAC(rangeValueStart))
        dispatch(setDisabledValueAC(true))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.displayWrapper}>
                <Display value={value}
                         maxCounterValue={maxCounterValue}
                         setGoodRange={props.setGoodRange}
                         rangeSetDisabled={rangeSetDisabled}
                />
            </div>
            <div className={s.buttonWrapper}>
                <Button onClick={newValueCounter}
                        disabledValue={value === maxCounterValue || !rangeSetDisabled}
                        title={'Raise'}/>
                <Button onClick={resetValueCounter}
                        disabledValue={disabledValue}
                        title={'Reset'}/>
            </div>

        </div>
    )
}