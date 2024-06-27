import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import firebaseApp from '../firebaseApp'


interface AuthProps {
    children: ReactNode;
  }

export const AuthContext = createContext({
    user: null as User | null,
})

export function AuthContextProvider({ children }: AuthProps) {
    const auth = getAuth(firebaseApp);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(user);
            }
        });
    }, [auth])


    return (
        <AuthContext.Provider value={{ user: currentUser }}>
          {children}
        </AuthContext.Provider>
      );
}