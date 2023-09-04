import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

type RootStateType = typeof rootReducer
export type ReduxStateType = ReturnType<RootStateType>

export const store = createStore(rootReducer)


//@ts-ignore
window.store = store


