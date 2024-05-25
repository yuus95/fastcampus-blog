import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <>
        <form action="/post" method="POST" className="form form--lg">
                <h1 className="form__title"> 로그인 </h1>
                <div className="form__block">
                    <label htmlFor="email">아이디 </label>
                    <input type="email"
                        name="email"
                        id="email"
                        required />
                </div>
                <div className="form__block">
                    <label htmlFor="password">비밀번호 </label>
                    <input type="password"
                        name="password"
                        id="password"
                        required />
                </div>
                <div className="form__block">
                    아이디가 없으신가요? <Link to="/signup" className="form__link">회원가입하기 </Link>
                </div>

                <div className="form__block">
                    <input type="submit" className="form__btn--submit" value="로그인"/>
                </div>
            </form>
        </>
        
    )
}