import { on } from "events";
import { ReactHTMLElement, useState } from "react";
import { PostProps } from "./PostList";


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

interface CommentsProps {
    postDetail: PostProps;
  }
  

  export default function Comments({ postDetail }: CommentsProps) {
    const [comment, setComment] = useState("");
    console.log("posts",postDetail)
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value}  = e?.target;

        console.log("name" , name, "value", value)
    
        if(name ==='comment__text') {
            setComment(value);
        }
    }

    return (
        <>
            <div className="comment__form">
                <span className="comment__form_title">댓글 등록</span>
                <form action="">
                    <textarea className="comment__form_text" 
                    name = "comment__text"
                    onChange={onChange}
                    />

                    <div className="comment__submit_btn_reserve">
                        <input type="button" 
                        className="comment__submit_btn" 
                        name="comment__submit_btn" 
                        value="등록" />
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