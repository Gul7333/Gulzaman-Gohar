import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
interface themeObject {
    theme: string,
    toggleTheme: ()=> void
}
export const getTheme = (): themeObject => {




    const themeContext = useContext(ThemeContext)
  

    if (!themeContext) {
      throw new Error(
        "ThemeContext is undefined, make sure you are using the ThemeProvider."
      );
    }
  
    const { theme, toggleTheme, } = themeContext

    return { theme, toggleTheme}
}