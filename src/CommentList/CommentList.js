import React from "react";
import {Comment} from "../Comment/Comment";

export function CommentList() {
    return (
        <div className={"CommentList"}>
            <Comment
                commentNum={1}
                author={"Bla Bla"}
                date={new Date(2020, 12, 31).toDateString()}
                content={"I like React"}
            />
            <Comment
                commentNum={2}
                author={"blabla"}
                date={new Date(2020, 4, 22).toDateString()}
                content={"I like Javascript"}
            />
            <Comment
                commentNum={3}
                author={"blalovich"}
                date={new Date(1997, 3, 13).toDateString()}
                content={"Recursion is hard!"}
            />
        </div>
    );
}