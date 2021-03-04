import './button.modules.css'

type ButtonType = {
    onClick: () => void
    disabledValue?: boolean
    title: string
}

export const Button = (props: ButtonType) => {
    return (
        <button onClick={props.onClick} disabled={props.disabledValue}>{props.title}</button>
    )
}