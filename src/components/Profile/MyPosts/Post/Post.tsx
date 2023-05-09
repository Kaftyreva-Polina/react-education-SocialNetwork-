import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string,
    likesCounter: number
}

export const Post = (props: PostPropsType) => {
    return <div className={s.item}>
        <img
            src="https://kartinkin.net/pics/uploads/posts/2022-09/1663612318_1-kartinkin-net-p-prikolnie-sobachki-vkontakte-1.jpg"/>
        {props.message}
        <div>
            <span>like {props.likesCounter}</span>
        </div>
    </div>
}

