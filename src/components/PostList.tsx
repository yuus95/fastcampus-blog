import { AuthContext } from "context/Authenticate";
import { getAuth } from "firebase/auth";
import firebaseApp from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

interface PostListProps{
    hasNavigation?: boolean;
}


interface PostProps {
    id: string,
    title:string,
    context:string,
    summary:string,
    createAt:string,
    email:string,
}
export default function PostList({hasNavigation = true}: PostListProps) {
    const [post,setPost] = useState<PostProps>();
    
    const postList =  async() => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const id = doc.id
            const apiObject = {...doc.data(),id}
          });
          
    }

    useEffect(() => {
        postList();
    },[])

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                <div className="post__navigation-active">전체</div>
                <div>나의 글</div>
            </div>
            )}
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile__box">
                                <div className="profile" />
                                <div className="post__author">김모모</div>
                                <div className="post__date">2024.01.24 17:18 토요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}