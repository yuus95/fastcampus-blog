import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "firebaseApp";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
    const auth = getAuth(firebaseApp);
    const navigate = useNavigate();

    return (
        <div className="profile__box">
            <div className="flex__box-lg">
                <div className="profile__image"></div>
                <div>
                    <div className="profile__email">{auth?.currentUser?.email}</div>
                    <div className="profile__name">{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : '사용자'}</div>
                </div>
            </div>
            <div onClick={async () => {
                getAuth(firebaseApp);
                await signOut(auth)
                toast.success("로그아웃에 성공했습니다.")
                navigate("/login");
            }} className="profile__logout" >
                로그아웃
            </div>

        </div>
    )
}