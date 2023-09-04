import {
    addPostAC, AddPostActionType, ProfilePageType, updatePostTextAC, UpdatePostTextActionType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";


type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addPost: () => void
    updatePost: (updatePostText: string) => void
}
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        profilePage: state.profile
    }
}

const mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdatePostTextActionType) => void): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        updatePost: (updatePostText: string) => {
            dispatch(updatePostTextAC(updatePostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);