import { AuthContext } from "context/Authenticate";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

interface PostListProps {
    hasNavigation?: boolean;
    postType?: PostType
}

export type Category = "WEB" | "BACKEND" | "NATIVE" | "FRONT";
export const CategoryTap: Category[] = ["WEB", "BACKEND","FRONT","NATIVE"]

type PostType = 'All' | 'My';

export interface PostProps {
    id?: string,
    title: string,
    content: string,
    summary: string,
    createdAt: string,
    email: string,
}

export default function PostList({ hasNavigation = true, postType = 'My' }: PostListProps) {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [activeTap, setType] = useState<PostType>(postType);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const getPostList = async () => {
        const postQueryRef = collection(db, "posts")
        setPosts([]);
        let q;
        if (postType === 'My' && user) {
            q = query(postQueryRef, where("email", "==", user.email), orderBy("createdAt", "desc"));
        } else {
            q = query(postQueryRef, orderBy("createdAt", "desc"));
        }
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev) => [...prev, dataObj as PostProps]);
        });
    }

    const onClickDelete = async (postId: string) => {
        if (postId) {
            try {

                await deleteDoc(doc(db, "posts", postId));
                toast.success("게시글을 삭제했습니다.");
                navigate("/");
            }
            catch (error: any) {
                console.log(error);
                toast.error(error);
            }
        }
    }

    useEffect(() => {
        getPostList();
    }, [activeTap])

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div role="presentation"
                        onClick={() => setType("All")}
                        className={activeTap === "All" ? "post__navigation-active" : ""} >전체</div>
                    <div className={activeTap === "My" ? "post__navigation-active" : ""} onClick={() => setType('My')}>나의 글</div>
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
                                <div className="post__utils-box">
                                    <div className="post__delete" onClick={() => onClickDelete(post?.id as string)}>삭제</div>
                                    <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                                        <div className="post__edit">수정</div>
                                    </Link>
                                </div>
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