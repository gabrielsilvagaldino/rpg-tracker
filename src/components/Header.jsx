import { useContext } from "react";
import AppContext from "../context/AppContext";

function Header() {
  const { darkMode, darkModeButton } = useContext(AppContext); 
  return (
    <header>
      <nav>
        <button type="button" onClick={darkModeButton} >
          <img width='40' src={ darkMode ? '/sunIcon.png' :  '/moonIcon.png' } alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header