import gul from '../../assets/gul.jpg'
function Picture() {
  return (
    <div style={{width: "300px", borderRadius: "10px", overflow: "hidden"}}>
        <img src={gul} width={"100%"} ></img>
    </div>
  )
}

export default Picture