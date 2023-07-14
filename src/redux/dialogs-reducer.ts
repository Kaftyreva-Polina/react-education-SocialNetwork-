import {ActionsPropsType, DialogsPageType, MessagePropsType} from "./store";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>

const initialState: DialogsPageType = {
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
}

const dialogsReducer = (state = initialState, action: ActionsPropsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const Message: MessagePropsType = {
                id: new Date().getTime(),
                message: state.updateMessageText
            }
            state.messagesData.push(Message);
            state.updateMessageText = "";
            return state
        case "UPDATE-MESSAGE-TEXT":
            state.updateMessageText = action.newMessage;
            return state
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}

export const updateMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}

export default dialogsReducer;