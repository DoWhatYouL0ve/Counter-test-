import './counter.modules.css'
import {Display} from './counterDisplay/display'
import {Button} from "./counterButton/button";


type CounterType = {
    resetValueCounter: () => void
    value: number
    newValueCounter: () => void
    disabledValue: boolean
}

export const Counter = (props: CounterType) => {

    return (
        <div className={'wrapper'}>
            <Display value={props.value}/>
            <div className={'buttonWrapper'}>
                <Button onClick={props.newValueCounter}
                        //disabledValue={props.disabledValue}
                        title={'Raise'}/>
                <Button onClick={props.resetValueCounter}
                        disabledValue={props.disabledValue}
                        title={'Reset'}/>
            </div>

        </div>
    )
}