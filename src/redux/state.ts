let rerenderEntireTree = () => {
    console.log("State changed");
}

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
    messagesData: MessagePropsType[],
    updateMessageText: string
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
        ],
        updateMessageText: ""
    },
    sidebar: {}
}


export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.updateText,
        likesCounter: 0
    };

    state.profilePage.posts.unshift(newPost);
    state.profilePage.updateText = "";
    rerenderEntireTree();
}

export const updatePostText = (postMessage: string) => {
    state.profilePage.updateText = postMessage;
    rerenderEntireTree();
}
export const addMessage = () => {
    const Message: MessagePropsType = {
        id: new Date().getTime(),
        message: state.dialogsPage.updateMessageText
    }

    state.dialogsPage.messagesData.push(Message);
    state.dialogsPage.updateMessageText = "";
    rerenderEntireTree();
}

export const updateMessageText = (newMessage: string) => {
    state.dialogsPage.updateMessageText = newMessage;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;