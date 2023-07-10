import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsItem/Message";
import {ActionPropsType, DialogsPageType} from "../../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionPropsType) => void
}
export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>)

    const addMessageHandler = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: "UPDATE-MESSAGE-TEXT", newMessage: e.currentTarget.value})
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addMessageHandler();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <input value={props.dialogsPage.updateMessageText} onChange={updateMessageTextHandler}
                       onKeyDown={onKeyHandler}/>
            </div>
            <div>
                <button onClick={addMessageHandler}>Add message</button>
            </div>
        </div>
    )
}