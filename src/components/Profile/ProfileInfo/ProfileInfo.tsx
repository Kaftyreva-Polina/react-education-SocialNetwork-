import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src="https://media.istockphoto.com/id/647197172/photo/vintage-photo-of-lavender-field.jpg?s=612x612&w=0&k=20&c=lMRdg0O_UzJTIv7yC6OdHb1cbNMg0xpj1FtVjBmlNj8="/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}


export default ProfileInfo;