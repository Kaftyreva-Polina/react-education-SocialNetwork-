import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCounter: 15},
        {id: 2, message: "It's my first post", likesCounter: 20}
    ]
    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

