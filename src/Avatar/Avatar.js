import React from "react";
import "./Avatar.css";

export  function Avatar(props) {
    return (
        <div className={'Avatar'}>
            <img
                src={props.url}
                alt={'avatarIcon'}
                width={props.width}
                className={
                    props.shape === 'circle' ? "roundAvatar" : ""
                }
            />
        </div>
    );
}