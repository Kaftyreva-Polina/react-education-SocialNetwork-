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

type StoreType = {
    _state: RootStateType
    addPost: () => void
    updatePostText: (postMessage: string) => void
    addMessage: () => void
    updateMessageText: (newMessage: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: ()=> void) => void
    getState: () => RootStateType
}

export const store: StoreType = {
    _state:  {
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
},
    addPost()  {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.updateText,
            likesCounter: 0
        };

        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.updateText = "";
        this._rerenderEntireTree();
    },
    updatePostText(postMessage: string) {
        this._state.profilePage.updateText = postMessage;
        this._rerenderEntireTree();
    },
    addMessage() {
        const Message: MessagePropsType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.updateMessageText
        }

        this._state.dialogsPage.messagesData.push(Message);
        this._state.dialogsPage.updateMessageText = "";
        this._rerenderEntireTree();
    },
    updateMessageText(newMessage: string) {
        this._state.dialogsPage.updateMessageText = newMessage;
        this._rerenderEntireTree();
    },
    _rerenderEntireTree() {
        console.log("State changed");
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    }
}


export default store;