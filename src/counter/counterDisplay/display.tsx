import './display.modules.css'

type DisplayType = {
    value: number
}

export const Display = (props: DisplayType) => {
    return (
        <div className={'display'}>
            <h2 className={props.value === 5 ? 'red' : undefined}>{props.value}</h2>
        </div>
    )

}