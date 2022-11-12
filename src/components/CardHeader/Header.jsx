import "./header.css";
import icon from "../../images/Icon.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-left" style={{marginLeft:"5px"}}>
          <div className="icon" style={{marginTop:"7px",marginRight:"5px"}}>
            <img src={icon} alt="icon" />
          </div>
          <div className="text">
            <p style={{fontSize:"20px",margin:"0"}}>Share to web</p>
            <p style={{color:"grey",fontSize:"12px",margin:"0"}}>Publish and share link with anyone</p>
          </div>
        </div>
        <div className="header-right" style={{marginRight:"15px"}}>
        <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
        </div>
      </div>
    </>
  );
};
export default Header;
