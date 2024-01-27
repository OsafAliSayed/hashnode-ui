// This file is used to create reducer...

import { createReducer, on } from "@ngrx/store"
import { login, logout } from "./signin.actions"

// An interface to keep track of state and anyother variables
export interface LoginState {
    logState: number
}

//Intializing State Value -> By Default it is logout
export const intialLogState: LoginState = {
    logState: 0
}

//Creating Reducer
export const loginReducer = createReducer(
    intialLogState,
    on(login, state=> ({...state, logState: 1})), // Creating reducer for Login which updates state to 1
    on(logout, state=> ({...state, logState: 0})) // Creating reducer for Login which updates state to 0
)