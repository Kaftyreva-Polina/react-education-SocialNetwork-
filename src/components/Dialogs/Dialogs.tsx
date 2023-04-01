import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
}

type DialogsItemType = {
    id: number
    name: string
}
const DialogsItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem id={1} name={"Dmitriy"}/>
                <DialogsItem id={2} name={"Andrey"}/>
                <DialogsItem id={3} name={"Svetlana"}/>
                <DialogsItem id={4} name={"Sasha"}/>
                <DialogsItem id={5} name={"Viktor"}/>
                <DialogsItem id={6} name={"Valera"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hello"}/>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
            </div>


        </div>
    )
}