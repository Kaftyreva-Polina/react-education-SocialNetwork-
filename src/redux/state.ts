import {rerenderEntireTree} from "../render";

export type PostsType = {
    id: number
    message: string
    likesCounter: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (newPostElement: string) => void
}

type ProfilePropsPageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePropsPageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 15},
            {id: 2, message: "It's my first post", likesCounter: 20}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dmitriy "},
            {id: 2, name: "Andrey "},
            {id: 3, name: "Svetlana"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hi"},
            {id: 3, message: "How are you?"}
        ]
    },
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCounter: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;