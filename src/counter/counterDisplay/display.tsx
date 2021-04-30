import s from './display.module.css'


type DisplayType = {
    value: number
    maxCounterValue: number
    setGoodRange: boolean
}

export const Display = (props: DisplayType) => {

    return (
        <div>
            {props.setGoodRange ? (<div className={s.display}>
            <h2 className={props.value === props.maxCounterValue ? s.red : undefined}>{props.value}</h2>
        </div> ) : (<div className={s.error}><p className={s.red}>Incorrect value</p></div>)}
        </div>
    )

}
