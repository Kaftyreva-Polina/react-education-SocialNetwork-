export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>
type ActionsPropsType = AddPostActionType | UpdatePostTextActionType

export type ProfilePageType = {
    posts: PostType[],
    updateText: string
}
type PostType = {
    id: number,
    message: string,
    likesCounter: number
}

const initialState = {
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
                message: state.updateText,
                likesCounter: 0
            };
            return {...state, posts: [newPost, ...state.posts], updateText: ""}
        case "UPDATE-POST-TEXT":
            return {...state, updateText: action.postMessage}
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