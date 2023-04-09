import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                className={s.image}
                src="https://puzzleit.ru/files/puzzles/159/158755/_original.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}


export default ProfileInfo;