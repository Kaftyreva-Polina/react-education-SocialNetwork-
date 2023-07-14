import {ActionsPropsType, PostType, ProfilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 15},
        {id: 2, message: "It's my first post", likesCounter: 20}
    ],
    updateText: ""
}

const profileReducer = (state = initialState, action: ActionsPropsType): ProfilePageType => {
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

export default profileReducer;