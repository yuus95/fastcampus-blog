import {AuthContext} from "context/Authenticate";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "firebaseApp";
import { useContext } from "react";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="profile__box">
            <div className="flex__box-lg">
                <div className="profile__image"></div>
                <div>
                    <div className="profile__email">{user?.email}</div>
                    <div className="profile__name">{user?.displayName ? user?.displayName : '사용자'}</div>
                </div>
            </div> 
            <div onClick={async () => {
                const auth = getAuth(firebaseApp);
                await signOut(auth)
                toast.success("로그아웃에 성공했습니다.")
                navigate("/login");
            }} className="profile__logout" >
                로그아웃
            </div>

        </div>
    )
}