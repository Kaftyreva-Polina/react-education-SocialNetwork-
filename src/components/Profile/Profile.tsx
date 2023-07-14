import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsPropsType, ProfilePageType} from "../../redux/store";

type ProfileProps = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsPropsType) => void
}
export const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

