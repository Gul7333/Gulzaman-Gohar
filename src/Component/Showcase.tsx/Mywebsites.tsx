import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";


function Mywebsites() {
    const themeContext = useContext(ThemeContext);
     if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined, make sure you are using the ThemeProvider."
    );
  }

     const { theme } = themeContext;
  
  return (
    <div id="showcase">
        <h2>Here are my websites</h2>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://drug-pedia.vercel.app">Drug pedia</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px", fontFamily: "Playwrite AU TAS"}}>A website which gives detail and description of medicines.</span>
    </div>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://pakdrugprice.vercel.app">Pak drug price</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px",fontFamily: "Playwrite AU TAS"}}>A website which provides uptodate prices of medicines in pakistan.</span>
    </div>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://gul7333.github.io/Bubble-Game">Bubble Game</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px", fontFamily: "Playwrite AU TAS"}}>A bubble game which i made during practice of javascript.</span>
    </div>
    <div>
        <li style={{fontSize: "1.4em", fontWeight: "bold",marginLeft: 0 ,marginTop: "1em",}}> <a style={{textDecoration: "none",color: theme === "light" ? "#000" : "#fff" }} href="http://gul7333.github.io/Analog-Clock">Analog Clock</a> </li>
        <span style={{marginLeft: "2em", display : 'block' ,marginTop: "5px", fontFamily: "Playwrite AU TAS"}}>A Beautifull analog Clock i made during practice of web learning.</span>
    </div>
    
  
    </div>

  )
}

export default Mywebsites