import {
    addMessageAC,
    AddMessageActionType,
    DialogsPageType,
    updateMessageTextAC,
    UpdateMessageTextActionType
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateMessageText: (text: string) => void
}

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogs
    }
}

const mapDispatchToProps = (dispatch: (action: AddMessageActionType | UpdateMessageTextActionType) => void): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateMessageText: (newMessageText: string) => {
            dispatch(updateMessageTextAC(newMessageText))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)