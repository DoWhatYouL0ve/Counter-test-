import s from './display.module.css'
import React from "react";


type DisplayType = {
    value: number
    maxCounterValue: number
    setGoodRange: boolean
    rangeSetDisabled: boolean
}

export const Display = (props: DisplayType) => {

    return (
        <div>
            {props.setGoodRange && props.rangeSetDisabled?
                (<div className={s.display}>
                    <span className={props.value === props.maxCounterValue ? s.red : undefined}>{props.value}</span>
                </div>) : props.setGoodRange && !props.rangeSetDisabled ?
                    (<div className={s.error}><p>enter values and press "set"</p></div>) :
                    (<div className={s.error}><p className={s.red}>Incorrect value</p></div>)}
        </div>
    )
}
