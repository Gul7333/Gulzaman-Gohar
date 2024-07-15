import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.tsx";
import logo from "../../assets/github-mark/github-mark.png" 
import darklogo from "../../assets/github-mark/github-mark-white.png"
import ToggleButton from "../ToggleButton.tsx";
function Header() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined, make sure you are using the ThemeProvider."
    );
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header
      className="App-header"
      style={{
        display: "flex",
        padding: "3px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        boxSizing: "border-box",
    // fontFamily: "Playwrite AU TAS",

    
        
  
        
      }}
    >
      <div style={{ fontSize: "1.4em", lineHeight: 0,  }}>Gul Zaman</div>

      <div style={{ display: "flex", gap: "4px", alignItems: "center",justifyContent: "center" }}>
        <div style={{ width: "27px", height: "27px" }}>
        
          <a href="https://github.com/Gul7333">
            <img
              src={theme === "light" ? logo : darklogo}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </a>
        </div>

        {/* <button onClick={toggleTheme} style={{ maxWidth: "px"}}> */}
        <ToggleButton theme={theme} toggleTheme={toggleTheme}>
        
        </ToggleButton>
      </div>
    </header>
  );
}

export default Header;
