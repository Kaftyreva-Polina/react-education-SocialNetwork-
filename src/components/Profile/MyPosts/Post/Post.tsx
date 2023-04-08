import React from 'react';
import s from './Post.module.css';

export type PostsType = {
    id?: number
    message: string
    likesCounter: number
}
export const Post = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img src='https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-47.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCounter}</span>
            </div>
        </div>
    )
}

