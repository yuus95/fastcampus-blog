
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import New from "../pages/posts/new";
import Edit from "../pages/posts/edit";
import Profile from "../pages/profile/index";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";
import TestPage from "pages/test";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({isAuthenticated}: RouterProps) {


  return (
    <>
    <Routes> 
      {isAuthenticated ? <> 
        <Route path="/" element={<Home />}> </Route>
      <Route path="/posts" element={<PostList/>}> </Route>
      <Route path="/posts/:id" element={<PostDetail />}> </Route>
      <Route path="/posts/new" element={<New />}> </Route>
      <Route path="/posts/edit/:id" element={<Edit/>}> </Route>
      <Route path="/profile" element={<Profile/>}> </Route>
      <Route path="/*" element={<Navigate replace to="/" />}/>
      </>
      :
      <>
      <Route path="/login" element={<LoginPage/>}> </Route>
      <Route path="/signup" element={<SignupPage/>}> </Route>
      <Route path="/test-carousel" element={<TestPage/>}></Route>
      <Route path="/*" element={<Navigate replace to="/login" />}/>
      </>
    }
    </Routes>
    </>
  )
} 