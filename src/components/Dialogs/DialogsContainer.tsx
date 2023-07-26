import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogs
                const addMessageHandler = () => {
                    store.dispatch(addMessageAC())
                }

                const updateMessageTextHandler = (newMessageText: string) => {
                    store.dispatch(updateMessageTextAC(newMessageText))
                }


                return <Dialogs dialogsPage={state} updateMessageText={updateMessageTextHandler}
                                addMessage={addMessageHandler}/>
            }}
        </StoreContext.Consumer>
    )
}