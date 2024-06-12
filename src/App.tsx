import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from "./components/Router";
import 'react-toastify/dist/ReactToastify.css';
import firebaseApp from './firebaseApp'
import {getAuth,onAuthStateChanged} from 'firebase/auth'

import { useEffect, useState } from 'react';


function App() {

  const auth = getAuth(firebaseApp);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [auth])

  return (
    <>
      <ToastContainer />
      < Router isAuthenticated={isAuthenticated} />
    </>
  )
}

export default App;
