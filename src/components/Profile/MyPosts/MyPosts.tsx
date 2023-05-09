import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PropsType) => {
    const postElements = props.profilePage.posts.map(post => {
        return <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
    })

    const newPostElement = React.useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current && newPostElement.current.value.length > 0) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""
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
                {postElements}
            </div>
        </div>

    )
}

