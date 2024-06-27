import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "context/Authenticate";
import { db } from "../firebaseApp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";

export default function PostForm() {
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(title, summary, content);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("test");
        e.preventDefault();
        try {
            console.log("onSubmit");
            await addDoc(collection(db, "posts"), {
                title: title,
                summary: summary,
                content: content,
                email: user?.email,
                createdAt: new Date()?.toLocaleDateString("ko", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                }),
            });

            toast?.success("게시글 등록이 완료됐습니다.");
            navigate("/");
        } catch (e: any) {
            console.log(e);
            toast?.error(e?.code);
        }
    }
    
    

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        }

        if (name === 'summary') {
            setSummary(value);
        }

        if (name === 'content') {
            setContent(value);
        }
    }

    
    return (
        <>
            <form onSubmit={onSubmit} className="form">
                <div className="form__block">
                    <label htmlFor="title">제목 </label>
                    <input type="text"
                        name="title"
                        id="title"
                        onChange={onChange}
                        value={title}
                        required />
                </div>
                <div className="form__block">
                    <label htmlFor="summary">요약 </label>
                    <input type="text"
                        name="summary"
                        id="summary"
                        onChange={onChange}
                        value={summary}
                        required />
                </div>
                <div className="form__block">
                    <label htmlFor="content">내용 </label>
                    <textarea
                        name="content"
                        id="content"
                        onChange={onChange}
                        value={content}
                    />
                </div>

                <div className="form__block">
                    <input type="submit" className="form__btn--submit" value="제출" />
                </div>
            </form>
        </>
    );
}