import { doc } from "@firebase/firestore";
import { deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseApp";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { PostProps } from "./PostList";
import { AuthContext } from "context/Authenticate";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import Comments from "./Comments";

export default function PostDetail() {
    const [post, setPost] = useState<PostProps | null>(null);
    const { user } = useContext(AuthContext);

    const params = useParams();
    const navigate = useNavigate();

    const getPost = async (id: string) => {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const obj = { id: id, ...docSnap.data() }
            setPost(obj as PostProps);
        }
    }

    useEffect(() => {
        getPost(params?.id as string);
    }, [params?.id])

    const onClickDelete = async () => {
        if (post && post.id) {
            try {
                console.log(post);
                await deleteDoc(doc(db, "posts", post.id));
                toast.success("게시글을 삭제했습니다.");
                navigate("/");
            }
            catch (error: any) {
                console.log(error);
                toast.error(error);
            }
        }

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
            {post && post.email === user?.email ?
                <div className="post__utils-box">
                    <div className="post__delete" onClick={onClickDelete}>삭제</div>
                    <div className="post__edit">수정</div>
                </div>
                :
                <div></div>
            }
            <div className="post__text">
                {post?.content}
            </div>
            {post && <Comments postDetail={post} />}
        </div >
    </>
}