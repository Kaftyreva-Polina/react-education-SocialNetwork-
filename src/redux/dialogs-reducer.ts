import {ActionsPropsType, DialogsPageType, MessagePropsType} from "./state";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>

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
const dialogsReducer = (state: DialogsPageType, action: ActionsPropsType): DialogsPageType => {
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

export default dialogsReducer;