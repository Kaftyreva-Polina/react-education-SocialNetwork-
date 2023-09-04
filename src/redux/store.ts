import React from "react";
// import profileReducer, {AddPostActionType, UpdatePostTextActionType} from "./profile-reducer";
// import dialogsReducer, {AddMessageActionType, UpdateMessageTextActionType} from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: SidebarPageType
// }
//
// export type ProfilePageType = {
//     posts: PostType[],
//     updateText: string
// }
//
// export type PostType = {
//     id: number,
//     message: string,
//     likesCounter: number
// }
//
// export type DialogsPageType = {
//     dialogsData: DialogPropsType[],
//     messagesData: MessagePropsType[],
//     updateMessageText: string
// }
//
// export type DialogPropsType = {
//     id: number,
//     name: string
// }
//
// export type MessagePropsType = {
//     id: number,
//     message: string
// }
//
// export type SidebarPageType = {}
//
// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsPropsType) => void
// }
//
// export type ActionsPropsType = AddPostActionType | UpdatePostTextActionType
//     | AddMessageActionType | UpdateMessageTextActionType
//
//
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCounter: 15},
//                 {id: 2, message: "It's my first post", likesCounter: 20}
//             ],
//             updateText: ""
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: "Dmitriy "},
//                 {id: 2, name: "Andrey "},
//                 {id: 3, name: "Svetlana"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Viktor"},
//                 {id: 6, name: "Valera"}
//             ],
//             messagesData: [
//                 {id: 1, message: "Hello"},
//                 {id: 2, message: "Hi"},
//                 {id: 3, message: "How are you?"}
//             ],
//             updateMessageText: ""
//         },
//         sidebar: {}
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber();
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state
//     }
// }
//
//
// export default store;