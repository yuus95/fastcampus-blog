export default function SignUp(){
    return (
        <>
        <form action="/post" method="POST" className="form form--lg">
                <h1 className="form__title"> 회원가입 </h1>
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
                    <label htmlFor="password">비밀번호 확인</label>
                    <input type="password"
                        name="password"
                        id="password"
                        required />
                </div>

                <div className="form__block">
                    <input type="submit" className="form__btn--submit" value="회원가입"/>
                </div>
            </form>
        </>
    )
}