
function ToggleButton({theme, toggleTheme}) {

    // const [active, setActive] = useState(false)
  return (
    <div
      style={{
        position: "relative",
        borderWidth: "2px",
        padding: "0 3px",
        borderRadius: "20px",
        borderColor: theme === "light" ? "#000" : "#fff",
        borderStyle: "solid",
        display: "inline-block",
        width: "60px",
        height: "20px"
      }}
    >
      <input checked={theme !== "light"} type="checkbox" name="" id="toogle" hidden onChange={()=> toggleTheme()} />
      <label htmlFor="toogle">
        <div
          style={{  width: "20px", height: "20px", position: "absolute",left: theme !== "light" ? "46px" : "0px", borderRadius: "50%", backgroundColor: theme === "light" ? "#000" : "#fff" ,transition: "left 0.4s" , }}
        >
        </div>
            <div style={{fontFamily: "monospace", lineHeight: "20px", marginLeft: theme !== "light" ? "0px" : "25px",}}>{theme === "light" ? "day" : "night"}</div>
      </label>
    </div>
  );
}

export default ToggleButton;
