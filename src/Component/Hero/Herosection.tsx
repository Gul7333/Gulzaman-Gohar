import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Picture from "./Picture";

function Herosection() {
  const themeContext = useContext(ThemeContext)


  if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined, make sure you are using the ThemeProvider."
    );
  }
    const { theme } = themeContext;

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
        //   width: "100vw",
          padding: "1em",
        //   background: "green",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "13px",
        }}
      >
        <div
          style={{ fontSize: "30px", fontWeight: "bold", marginTop: "60px",  }}
        >
          Muhammad Gul Zaman{" "}
          <strong style={{ backgroundColor: "lightblue", color: "#000", padding : "0 5px",}}>
            web and app developer
          </strong>
          <span style={{ fontSize: "0.5em", display: "block" , marginTop: "5px", fontFamily: "monospace"}}> Html, css, Javascript,nodejs, react, react Native, python</span>
   
    
    <span style={{ fontSize: "0.5em", display: "block" , marginTop: "70px", maxWidth: "400px", fontFamily: "monospace" }}> I have passion to create web and apps which can simplify and solve real life problems of users. </span>
          <span style={{ fontSize: "0.8em", display: "block" , marginTop: "70px", maxWidth: "400px"}}> <button> <a href="#showcase" style={{textDecoration: "none", color : theme === "light" ? "#fff" : "#000"}} >see how</a> </button> </span>
          <span style={{ fontSize: "0.8em", display: "block" , marginTop: "10px", maxWidth: "400px"}}> <button> <a href="https://github.com/Gul7333" style={{textDecoration: "none", color : theme === "light" ? "#fff" : "#000"}} >Also see my Github</a> </button> </span>

        </div>
        <Picture />
      </div>

    </>
  );
}

export default Herosection;
