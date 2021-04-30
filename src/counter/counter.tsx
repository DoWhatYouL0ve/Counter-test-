import s from './counter.module.css'
import {Display} from './counterDisplay/display'
import {Button} from "./counterButton/button";


type CounterType = {
    resetValueCounter: () => void
    value: number
    newValueCounter: () => void
    disabledValue: boolean
    maxCounterValue: number
    setGoodRange: boolean
    rangeSetDisabled: boolean
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.wrapper}>
            <Display value={props.value}
                     maxCounterValue={props.maxCounterValue}
                     setGoodRange={props.setGoodRange}
                     rangeSetDisabled={props.rangeSetDisabled}
            />
            <div className={s.buttonWrapper}>
                <Button onClick={props.newValueCounter}
                        disabledValue={props.value === props.maxCounterValue}
                        title={'Raise'}/>
                <Button onClick={props.resetValueCounter}
                        disabledValue={props.disabledValue}
                        title={'Reset'}/>
            </div>

        </div>
    )
}