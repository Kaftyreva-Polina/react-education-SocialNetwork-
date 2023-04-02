import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCounter: 15},
        {id: 2, message: "It's my first post", likesCounter: 20}
    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea> </textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>

    )
}

