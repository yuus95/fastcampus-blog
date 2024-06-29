import { AuthContext } from "context/Authenticate";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

interface PostListProps {
    hasNavigation?: boolean;
}


export interface PostProps {
    id?: string,
    title: string,
    content: string,
    summary: string,
    createdAt: string,
    email: string,
}

export default function PostList({ hasNavigation = true }: PostListProps) {
    const [posts, setPosts] = useState<PostProps[]>([]);

    const { user } = useContext(AuthContext);

    const getPostList = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev) => [...prev, dataObj as PostProps]);
        });
    }

    useEffect(() => {
        getPostList();
    }, [])

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div className="post__navigation-active">전체</div>
                    <div>나의 글</div>
                </div>
            )}
            <div className="post__list">
                {posts?.length > 0 ?
                    posts?.map((post) => (
                        <div key={post.id} className="post__box">
                            <Link to={`/posts/${post?.id}`}>
                                <div className="post__profile__box">
                                    <div className="profile" />
                                    <div className="post__author">{post?.email}</div>
                                    <div className="post__date">{post?.createdAt}</div>
                                </div>
                                <div className="post__title">게시글 {post?.title}</div>
                                <div className="post__text">
                                    {post?.summary}
                                </div>
                            </Link>

                            {user?.email === post?.email ?
                                <Link to={`/posts/edit/${post?.id}}`} className="post__edit">
                                    <div className="post__utils-box">
                                        <div className="post__delete">삭제</div>
                                        <div className="post__edit">수정</div>
                                    </div>
                                </Link>
                                : <div></div>
                            }

                        </div>
                    ))
                    :
                    <div className="post__empty"> 게시글이 없습니다.</div>
                }
            </div>
        </>
    )
}