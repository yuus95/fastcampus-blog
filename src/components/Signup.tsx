import { useState } from "react"
import firebaseApp from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default function SignUp() {
    const [error, setError] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const auth = getAuth(firebaseApp);
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            console.log(error);
        }
    }


    // TODO toastify 설정하기, Error 블록만들기
    // Input onChange에서 사용할 수 있는 property
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
            } else if (passwordConfirm.length > 0 && value !== passwordConfirm) {
                console.log('password', password, ' passowrdConfirm', passwordConfirm)
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.")
            } else {
                setError("");
            }
        }

        if (name === 'password_confirm') {
            setPasswordConfirm(value);
            if (value.length < 8) {
                setError("비밀번호는 8글자 이상입니다.");
            } else if (password.length > 0 && value !== password) {
                console.log('password', password, ' passowrdConfirm', passwordConfirm)
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.")
            } else {
                setError("");
            }
        }
    };


    return (
        <>
            <form onSubmit={onSubmit} className="form form--lg">
                <h1 className="form__title"> 회원가입 </h1>
                <div className="form__block">
                    <label htmlFor="email">아이디 </label>
                    <input type="email"
                        name="email"
                        id="email"
                        onChange={onChange}
                        required />
                </div>
                <div className="form__block">
                    <label htmlFor="password">비밀번호 </label>
                    <input type="password"
                        name="password"
                        id="password"
                        onChange={onChange}
                        required />
                </div>
                <div className="form__block">
                    <label htmlFor="password_confirm">비밀번호 확인</label>
                    <input type="password"
                        name="password_confirm"
                        id="password_confirm"
                        onChange={onChange}
                        required />
                </div>

                {error && error.length > 0 && (
                    <div className="form__block">
                        <div className="form__block__error">
                            {error}
                        </div>
                    </div>
                )}


                <div className="form__block">
                    <input
                        type="submit"
                        className="form__btn--submit"
                        value="회원가입"
                        disabled={error?.length > 0}
                    />
                </div>
            </form>
        </>
    )
}