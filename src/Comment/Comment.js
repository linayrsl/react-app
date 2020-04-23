import React from "react";
import './Comment.css';

export function Comment(props) {
    return (
      <div className={'Comment'}>
          <div>{`Comment no. ${props.commentNum}`}</div>
          <div className={"authorName"}>{props.author}</div>
          <div className={"commentContent"}>{props.content}</div>
          <div className={"commentTime"}>{props.date}</div>
      </div>
    );
}