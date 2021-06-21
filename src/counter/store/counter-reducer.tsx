const SET_RANGE_VALUE_START = "SET_RANGE_VALUE_START"
const SET_RANGE_VALUE_MAX = "SET_RANGE_VALUE_MAX"
const SET_RANGE_SET_DISABLED = "SET_RANGE_SET_DISABLED"
const SET_ON_FOCUS_ERROR = "SET_ON_FOCUS_ERROR"
const SET_VALUE = "SET_VALUE"
const SET_DISABLED_VALUE = "SET_DISABLED_VALUE"
const SET_MAX_COUNTER_VALUE = "SET_MAX_COUNTER_VALUE"


const initialState = {
    rangeValueStart: 0,
    rangeValueMax: 1,
    rangeSetDisabled: true,
    onFocusError: false,
    value: 0,
    disabledValue: true,
    maxCounterValue: 5
}

type StateType = typeof initialState

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET_RANGE_VALUE_START":
            return {...state, rangeValueStart: action.value}
        case "SET_RANGE_VALUE_MAX":
            return {...state, rangeValueMax: action.value}
        case "SET_RANGE_SET_DISABLED":
            return {...state, rangeSetDisabled: action.value}
        case "SET_ON_FOCUS_ERROR":
            return {...state, onFocusError: action.value}
        case "SET_VALUE":
            return {...state, value: action.value}
        case "SET_DISABLED_VALUE":
            return {...state, disabledValue: action.value}
        case "SET_MAX_COUNTER_VALUE":
            return {...state, maxCounterValue: action.value}
        default:
            return state
    }
}

export const setRangeValueStartAC = (value: number) => ({type: SET_RANGE_VALUE_START, value} as const)
export const setRangeValueMaxAC = (value: number) => ({type: SET_RANGE_VALUE_MAX, value} as const)
export const setRangeSetDisabledAC = (value: boolean) => ({type: SET_RANGE_SET_DISABLED, value} as const)
export const setOnFocusErrorAC = (value: boolean) => ({type: SET_ON_FOCUS_ERROR, value} as const)
export const setValueAC = (value: number) => ({type: SET_VALUE, value} as const)
export const setDisabledValueAC = (value: boolean) => ({type: SET_DISABLED_VALUE, value} as const)
export const setMaxCounterValueAC = (value: number) => ({type: SET_MAX_COUNTER_VALUE, value} as const)

type  ActionsType = ReturnType<typeof setRangeValueStartAC> | ReturnType<typeof setRangeValueMaxAC> | ReturnType<typeof setRangeSetDisabledAC> | ReturnType<typeof setOnFocusErrorAC> | ReturnType<typeof setValueAC> | ReturnType<typeof setDisabledValueAC> | ReturnType<typeof setMaxCounterValueAC>
