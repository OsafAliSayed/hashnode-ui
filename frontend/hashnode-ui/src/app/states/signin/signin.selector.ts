// This file is used to create selector for signin action

import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

//Selecting current state from AppState
export const selectLoginState = (state: AppState) => state.signin; 

//Exposing the data
export const selectLogin = createSelector(
    selectLoginState,
    (state) => state.logState
)