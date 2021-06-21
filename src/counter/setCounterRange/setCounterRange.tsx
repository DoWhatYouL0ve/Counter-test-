import React, {ChangeEvent} from "react";
import s from './setCounterRange.module.css'
import {Button} from "../counterButton/button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
    setMaxCounterValueAC,
    setOnFocusErrorAC,
    setRangeSetDisabledAC,
    setRangeValueMaxAC,
    setRangeValueStartAC, setValueAC
} from "../store/counter-reducer";

type SetCounterRangeType = {
    setGoodRange: boolean
}

export const SetCounterRange = (props: SetCounterRangeType) => {

    const dispatch = useDispatch()
    const rangeValueStart = useSelector<AppRootStateType, number>(state => state.counterReducer.rangeValueStart)
    const rangeValueMax = useSelector<AppRootStateType, number>(state => state.counterReducer.rangeValueMax)
    const rangeSetDisabled = useSelector<AppRootStateType, boolean>(state => state.counterReducer.rangeSetDisabled)
    const onFocusError = useSelector<AppRootStateType, boolean>(state => state.counterReducer.onFocusError)

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        dispatch(setRangeValueMaxAC(+body))
        dispatch(setRangeSetDisabledAC(false))
    }

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        dispatch(setRangeValueStartAC(+body))
        dispatch(setRangeSetDisabledAC(false))
    }

    const onFocus = () => {
        dispatch(setOnFocusErrorAC(true))
    }

    const setRange = () => {
        dispatch(setValueAC(rangeValueStart))
        dispatch(setMaxCounterValueAC(rangeValueMax))
        dispatch(setRangeSetDisabledAC(true))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.chooseValueWrapper}>
                <div className={s.valueWrapper}>
                    <b>max value: </b>
                    <input type={'number'} value={rangeValueMax} className={onFocusError && rangeValueMax <= rangeValueStart? s.inputError : undefined} onChange={onChangeMax} onFocus={onFocus}/>
                </div>
                <div className={s.valueWrapper}>
                    <b>start value: </b>
                    <input type={'number'} value={rangeValueStart} className={onFocusError && (rangeValueStart >= rangeValueMax || rangeValueStart) < 0 ? s.inputError : undefined} onChange={onChangeStart} onFocus={onFocus}/>
                </div>
            </div>

            <div className={s.buttonWrapper}>
                <Button onClick={setRange}
                        title={'Set'}
                        disabledValue={!props.setGoodRange || rangeSetDisabled}
                />
            </div>
        </div>
    )
}