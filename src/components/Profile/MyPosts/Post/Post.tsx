import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-47.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

