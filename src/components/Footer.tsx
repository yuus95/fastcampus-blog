
import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";
import ThemeContext from "../context/Theme";

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <footer>
      <Link to="/posts/new">글쓰기</Link>
      <Link to="/posts">게시글</Link>
      <Link to="/profile">프로필</Link>
      <>
        {context.theme === "light" ? (
          <BiSun
            onClick={context.toggleMode}
            className="footer__theme-btn" />
        ) : (
          <BiMoon
            onClick={context.toggleMode}
            className="footer__theme-btn"
          />
        )}
      </>
    </footer>
  )
}