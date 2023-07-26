import React, {createContext} from "react";
import {ActionsPropsType} from "./redux/store";
import {Store} from "redux";
import {ReduxStateType} from "./redux/redux-store";


const StoreContext = createContext({} as Store<ReduxStateType, ActionsPropsType>)


export type ProviderType = {
    store: Store<ReduxStateType>
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContext