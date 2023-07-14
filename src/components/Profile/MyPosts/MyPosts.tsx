import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionsPropsType, ProfilePageType} from "../../../redux/store";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsPropsType) => void
}


export const MyPosts = (props: PropsType) => {

    const postElements = props.profilePage.posts.map(post => {
        return <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
    })

    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e.currentTarget.value))
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

