import firebaseApp from "firebaseApp";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function LoginForm() {
    const [error, setError] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth(firebaseApp);
        try {
            signInWithEmailAndPassword(auth, email, password);             
            toast.success("로그인에 성공했습니다.")
            navigate("/");
        } catch (error: any) {
            toast.error(error?.conde);
            console.log(error)
        }
    }


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!value?.match(validRegex)) {
                setError("이메일 형식이 올바르지 않습니다.");
            } else {
                setError("");
            }
        }

        if (name === 'password') {
            setPassword(value);
            if (value.length < 8) {
                setError("비밀번호는 8글자 이상입니다.");
            } else {
                setError("");
            }
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form form--lg">
                <h1 className="form__title"> 로그인 </h1>
                <div className="form__block">
                    <label htmlFor="email">아이디 </label>
                    <input type="email"
                        name="email"
                        id="email"
                        onChange={onChange}
                        value={email}
                        required />
                </div>

                <div className="form__block">
                    <label htmlFor="password">비밀번호 </label>
                    <input type="password"
                        name="password"
                        id="password"
                        onChange={onChange}
                        value={password}
                        required />
                </div>

                {error && error?.length > 0 && (
                    <div className="form__block">
                        <div className="form__block__error">
                            {error}
                        </div>
                    </div>
                )}

                <div className="form__block">
                    아이디가 없으신가요? <Link to="/signup" className="form__link">회원가입하기 </Link>
                </div>

                <div className="form__block">
                    <input type="submit" className="form__btn--submit" value="로그인" disabled={error?.length > 0} />
                </div>
            </form>
        </>

    )
}