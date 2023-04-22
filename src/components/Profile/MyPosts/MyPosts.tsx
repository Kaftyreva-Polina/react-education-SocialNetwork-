import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)
    const newPostElement = React.useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = "";
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}> </textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

