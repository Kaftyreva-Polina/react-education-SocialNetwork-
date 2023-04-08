import React from "react";
import s from "./MyPosts.module.css";
import {Post, PostsType} from "./Post/Post";


export type PostsForMapType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: PostsForMapType) => {


    // let posts = [
    //     {id: 1, message: "Hi, how are you?", likesCounter: 15},
    //     {id: 2, message: "It's my first post", likesCounter: 20}
    // ]

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)

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

