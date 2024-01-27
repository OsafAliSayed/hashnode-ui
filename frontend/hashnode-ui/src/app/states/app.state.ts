import { LoginState } from "./signin/signin.reducer";

// Creating interface to globally manage the state through out the Application
export interface AppState {
    signin: LoginState
}