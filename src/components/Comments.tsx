import { useState } from "react";


const mockComments = [
    {
        "id": 1,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 2,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 3,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 4,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 5,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 6,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 7,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 8,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 9,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 10,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    },
    {
        "id": 11,
        "comment": "Hello World",
        "email": "akak123@naver.com",
        "createAt": "2024-08-27",
    }
]

type comment = {
id: number,
comment: string,
email:string,
date: string
}

export default function Comments() {
    const [comment, setComment] = useState("");

    return (
        <>
            <div className="comment__form">
                <span className="comment__form_title">댓글 등록</span>
                <form action="">
                    <textarea className="comment__form_text" />

                    <div className="comment__submit_btn_div">
                        <input type="button" className="comment__submit_btn" name="comment__submit_btn" value="입력" />
                    </div>
                </form>
            </div>
            <div className="comment__list">
                {mockComments?.length > 0 ?
                    mockComments.map(comment => (
                        <div key={comment.id} className="comment">
                            <div className="comment__profile_box">
                                <div className="comment__id">{comment.id}</div>
                                <div>{comment.email}</div>
                            </div>
                            <div>{comment.comment}</div>
                            <div>{comment.createAt}</div>

                        </div>
                    ))
                    : <div></div>
                }
            </div>
        </>
    );
}