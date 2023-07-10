import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsItem/Message";
import {ActionsPropsType, addMessageAC, DialogsPageType, updateMessageTextAC} from "../../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsPropsType) => void
}
export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>)

    const addMessageHandler = () => {
        props.dispatch(addMessageAC())
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
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