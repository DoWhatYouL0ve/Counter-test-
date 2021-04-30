import React, {ChangeEvent} from "react";
import s from './setCounterRange.module.css'
import {Button} from "../counterButton/button";

type SetCounterRangeType = {
    rangeValueMax: number
    rangeValueStart: number
    onChangeMax: (body: number) => void
    onChangeStart: (body: number) => void
    setRange: () => void
    setGoodRange: boolean
    rangeSetDisabled: boolean
}

export const SetCounterRange = (props: SetCounterRangeType) => {

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        props.onChangeMax(+body)
    }

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        props.onChangeStart(+body)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.chooseValueWrapper}>
                <div className={s.valueWrapper}>
                    <b>max value: </b>
                    <input type={'number'} value={props.rangeValueMax} className={props.rangeValueMax <= props.rangeValueStart? s.inputError : undefined} onChange={onChangeMax}/>
                </div>
                <div className={s.valueWrapper}>
                    <b>start value: </b>
                    <input type={'number'} value={props.rangeValueStart} className={props.rangeValueStart >= props.rangeValueMax || props.rangeValueStart < 0 ? s.inputError : undefined} onChange={onChangeStart}/>
                </div>
            </div>

            <div className={s.buttonWrapper}>
                <Button onClick={props.setRange}
                        title={'Set'}
                        disabledValue={!props.setGoodRange || props.rangeSetDisabled}
                />
            </div>
        </div>
    )
}