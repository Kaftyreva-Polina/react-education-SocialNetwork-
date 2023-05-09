import {rerenderEntireTree} from "../render";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType
}

export type ProfilePageType = {
    posts: PostType[],
    updateText: string
}

export type PostType = {
    id: number,
    message: string,
    likesCounter: number
}

export type DialogsPageType = {
    dialogsData: DialogPropsType[],
    messagesData: MessagePropsType[]
}

export type DialogPropsType = {
    id: number,
    name: string
}

export type MessagePropsType = {
    id: number,
    message: string
}

type SidebarPageType = {}


const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 15},
            {id: 2, message: "It's my first post", likesCounter: 20}
        ],
        updateText: ""
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dmitriy "},
            {id: 2, name: "Andrey "},
            {id: 3, name: "Svetlana"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messagesData: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hi"},
            {id: 3, message: "How are you?"}
        ]
    },
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCounter: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const addMessage = (newMessage: string) => {
    const Message: MessagePropsType = {
        id: 4,
        message: newMessage
    }

    state.dialogsPage.messagesData.push(Message);
    rerenderEntireTree(state)
}

export default state;