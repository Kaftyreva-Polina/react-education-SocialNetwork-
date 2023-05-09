import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsItem/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    addMessage: (newMessage: string) => void
}
export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>)


    let newMessage = React.useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        if (newMessage.current && newMessage.current.value.length > 0) {
            props.addMessage(newMessage.current.value)
            newMessage.current.value = ""
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div><textarea ref={newMessage}></textarea></div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}