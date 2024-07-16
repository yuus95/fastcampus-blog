import { on } from "events";
import { ReactHTMLElement, useContext, useState } from "react";
import { PostProps } from "./PostList";
import { AuthContext } from "context/Authenticate";
import { db } from "firebaseApp";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";


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
    email: string,
    date: string
}

interface CommentsProps {
    postDetail: PostProps;
}


export default function Comments({ postDetail }: CommentsProps) {
    const [comment, setComment] = useState("");
    const { user } = useContext(AuthContext);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (postDetail && postDetail.id && user) {
            try{
                const postDetailResult = doc(db, "posts", postDetail.id);
                await updateDoc(postDetailResult, {
                    comments: arrayUnion({
                        uid: user.uid,
                        email: user.email,
                        comment: comment,
                        createAt: new Date()?.toLocaleDateString("ko", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        }),
                    })
                })
                toast.success("댓글 등록이 완료됐습니다.");
                setComment("");
            } catch(e: any){
                console.log(e.code)
            }
        }


    }

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e?.target;

        if (name === 'comment__text') {
            setComment(value);
        }
    }

    return (
        <>
            <div className="comment__form">
                <span className="comment__form_title">댓글 등록</span>
                <form onSubmit={onSubmit}>
                    <textarea className="comment__form_text"
                        name="comment__text"
                        onChange={onChange}
                        value={comment}
                    />

                    <div className="comment__submit_btn_reserve">
                        <input type="submit"
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