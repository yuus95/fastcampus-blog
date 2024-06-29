import { doc } from "@firebase/firestore";
import { getDoc } from "firebase/firestore";
import { db } from "../firebaseApp";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { PostProps } from "./PostList";

export default function PostDetail() {
    const [post, setPost] = useState<PostProps | null>(null);

    const params = useParams();

    const getPost = async (id: string) => {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const obj = {id: id, ...docSnap.data()}
            setPost(obj as PostProps);
        }
    }

    useEffect(() => {
        getPost(params?.id as string);
    },[params?.id])

    const onClickDelete = () => {
        console.log("execute delete");
    }


    return <>
        <div className="post__detail">
            <div className="post__box"></div>
            <div className="post__title">
                {post?.title}
            </div>
            <div className="post__profile__box">
                <div className="profile" />
                <div className="post__author">{post?.email}</div>
                <div className="post__date">{post?.createdAt}</div>
            </div>
            <div className="post__utils-box">
                <div className="post__delete" onClick={onClickDelete}>삭제</div>
                <div className="post__edit">수정</div>
            </div>
            <div className="post__text">
                {post?.content}
            </div>
        </div>
    </>
}