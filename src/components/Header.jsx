import { useContext } from "react";
import '../Header.css';
import AppContext from "../context/AppContext";

function Header() {
  const { darkMode, darkModeButton, teste } = useContext(AppContext); 
  return (
    <header id="container">
      <nav>
        <img width='40' src={ darkMode ? '/sunIcon.png' :  '/moonIcon.png' } alt="" />
        <div id="pill">
          <div id={ teste }></div>
        </div>
        <input id="button" type="checkbox" onChange={darkModeButton} />
      </nav>
    </header>
  );
}

export default Header