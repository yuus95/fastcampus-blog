import { ReactElement, ReactEventHandler, ReactHTMLElement, TextareaHTMLAttributes, useState } from "react"


export default function PostForm() {
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        if (name ==='title'){
            setTitle(value);
        }

        if (name ==='summary'){
            setSummary(value);
        }
    }

    return (
        <>
            <form action="/post" method="POST" className="form">
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
                        id="content" />
                </div>

                <div className="form__block">
                    <input type="button" className="form__btn--submit" value="제출" />
                </div>
            </form>
        </>

    )
}