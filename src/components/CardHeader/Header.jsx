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
            <p style={{fontSize:"20px"}}>Share to web</p>
            <p style={{color:"grey",fontSize:"12px"}}>Publish and share link with anyone</p>
          </div>
        </div>
        <div className="header-right" style={{marginRight:"15px"}}>
            <button>Toggle</button>
        </div>
      </div>
    </>
  );
};
export default Header;