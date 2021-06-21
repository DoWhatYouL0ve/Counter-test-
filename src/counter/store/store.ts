import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

let reducer = combineReducers( {
    counterReducer
})

export type AppRootStateType = ReturnType<typeof reducer>

export const store = createStore(reducer)