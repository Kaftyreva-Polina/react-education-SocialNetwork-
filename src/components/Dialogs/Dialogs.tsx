import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsItem/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";


type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateMessageText: (newMessage: string) => void
}
export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const addMessageHandler = () => {
        props.addMessage()
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMessageText = e.currentTarget.value
        props.updateMessageText(newMessageText)
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