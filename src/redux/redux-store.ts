import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

type RootState = typeof rootReducer

export type ReduxStateType = ReturnType<RootState>

export const store = createStore(rootReducer)


//@ts-ignore
window.store = store

