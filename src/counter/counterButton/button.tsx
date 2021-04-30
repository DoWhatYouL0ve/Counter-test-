import s from './button.module.css'

type ButtonType = {
    onClick: () => void
    disabledValue?: boolean
    title: string
}

export const Button = (props: ButtonType) => {
    return (
        <button className={s.button} onClick={props.onClick} disabled={props.disabledValue}>{props.title}</button>
    )
}