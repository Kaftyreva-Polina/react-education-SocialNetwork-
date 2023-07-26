import React from "react";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profile

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const updatePostText = (updatePostText: string) => {
                    store.dispatch(updatePostTextAC(updatePostText))
                }


                return <MyPosts profilePage={state} addPost={addPost}
                                updatePost={updatePostText}/>
            }
            }
        </StoreContext.Consumer>

    )
}

