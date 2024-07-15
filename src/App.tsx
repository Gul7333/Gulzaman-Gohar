// import { ThemeContext, ThemeProvider } from './Context/ThemeContext';
import "./Styles/Theme.css";
import Header from './Component/Header/Header';
import { ThemeProvider } from './Context/ThemeContext';
import Herosection from "./Component/Hero/Herosection";
import Showcase from "./Component/Showcase/Showcase";

const App: React.FC = () => {
  return (    
    <div className="App">
     <Header/>
     
     <Herosection/>
     <Showcase/>
    </div>
  );
};

const RootApp: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;