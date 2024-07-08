import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from "./components/Router";
import 'react-toastify/dist/ReactToastify.css';
import firebaseApp, { db } from './firebaseApp'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { useContext, useEffect, useState } from 'react';
import ThemeContext from 'context/Theme';


function App() {
  const themeContext = useContext(ThemeContext);
  const auth = getAuth(firebaseApp);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [auth])

  return (
    <div className={themeContext.theme}>
      <ToastContainer />
      < Router isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default App;
