import {ActionsPropsType, PostType, ProfilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>


export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updatePostTextAC = (postMessage: string) => {
    return {
        type: "UPDATE-POST-TEXT",
        postMessage: postMessage
    } as const
}


const profileReducer = (state: ProfilePageType, action: ActionsPropsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.updateText, //?
                likesCounter: 0
            };
            state.posts.unshift(newPost);
            state.updateText = "";
            return state
        case "UPDATE-POST-TEXT":
            state.updateText = action.postMessage;
            return state
        default:
            return state
    }
}

export default profileReducer;