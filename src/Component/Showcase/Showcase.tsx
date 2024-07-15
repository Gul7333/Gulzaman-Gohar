import Myapps from "./Myapps";
import Mywebsites from "./Mywebsites";

function Showcase() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        padding: "1em"
      }}
    >
     <Mywebsites/>
     <Myapps/>
    </div>
  );
}

export default Showcase;
