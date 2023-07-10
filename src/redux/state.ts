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

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionPropsType) => void
}

export type ActionPropsType = AddPostActionType | UpdatePostTextActionType
    | AddMessageActionType | UpdateMessageTextActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type UpdatePostTextActionType = {
    type: "UPDATE-POST-TEXT"
    postMessage: string
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type UpdateMessageTextActionType = {
    type: "UPDATE-MESSAGE-TEXT"
    newMessage: string
}

export const store: StoreType = {
    _state: {
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
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.updateText,
                likesCounter: 0
            };
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.updateText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.updateText = action.postMessage;
            this._callSubscriber();
        } else if (action.type === "ADD-MESSAGE") {
            const Message: MessagePropsType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.updateMessageText
            }

            this._state.dialogsPage.messagesData.push(Message);
            this._state.dialogsPage.updateMessageText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE-MESSAGE-TEXT") {
            this._state.dialogsPage.updateMessageText = action.newMessage;
            this._callSubscriber();
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    }
}


export default store;