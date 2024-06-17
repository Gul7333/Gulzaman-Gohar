import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Myapps() {

  const themeContext = useContext(ThemeContext);
     if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined, make sure you are using the ThemeProvider."
    );
  }

     const { theme, toggleTheme } = themeContext;
  
  return (
    <div>
        <h2>Here are my Apps</h2>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://play.google.com/store/apps/details?id=com.appleisred.DeenIllahi">Religion Of God</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px",fontFamily: "Playwrite AU TAS"}}>An App which showcases Books of SARKAR RIAZ AHMED GOHAR SHAHI.</span>
    </div>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://play.google.com/store/apps/details?id=com.pakdrugprice">Pak drug price</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px",fontFamily: "Playwrite AU TAS"}}>An app which gives uptodate price and detail of drug .</span>
    </div>
    
    
  
    </div>

  )
}

export default Myapps