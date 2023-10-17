import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";


type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updatePost: (updatePostText: string) => void
}


export const MyPosts = (props: PropsType) => {

    const postElements = props.profilePage.posts.map(post => {
        return <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
    })

    const addPostHandler = () => {
        props.addPost()
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value)
    }

    const onKeyBoardHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === "Enter" && addPostHandler();
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.updateText}
                              onChange={updatePostTextHandler}
                              onKeyDown={onKeyBoardHandler}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

