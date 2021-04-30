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
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.wrapper}>
            <Display value={props.value}
                     maxCounterValue={props.maxCounterValue}
                     setGoodRange={props.setGoodRange}
            />
            <div className={s.buttonWrapper}>
                <Button onClick={props.newValueCounter}
                        disabledValue={props.value === props.maxCounterValue? true : false}
                        title={'Raise'}/>
                <Button onClick={props.resetValueCounter}
                        disabledValue={props.disabledValue}
                        title={'Reset'}/>
            </div>

        </div>
    )
}