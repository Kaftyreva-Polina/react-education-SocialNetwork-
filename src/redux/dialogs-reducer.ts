export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>
type ActionsPropsType = AddMessageActionType | UpdateMessageTextActionType

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
            const newMessage: MessagePropsType = {
                id: new Date().getTime(),
                message: state.updateMessageText
            }
            return {...state, messagesData: [...state.messagesData, newMessage], updateMessageText: ""}
        case "UPDATE-MESSAGE-TEXT":
            return {...state, updateMessageText: action.newMessage}
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