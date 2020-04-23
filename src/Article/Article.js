import React from "react";
import './Article.css';
import {CommentList} from "../CommentList/CommentList";

export function Article(props) {
    return (
        <article className={"Article"}>
            <h3>{props.title}</h3>
            <div>{props.content}</div>
            <img
                src={props.image}
            />
            <CommentList />
        </article>
    );
}