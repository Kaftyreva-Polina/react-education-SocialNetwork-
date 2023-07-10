import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionPropsType, ProfilePageType} from "../../redux/state";

type ProfileProps = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType) => void
}
export const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

