import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";

const DialogsItem = (props: DialogsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;