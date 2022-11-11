import "./section.css"
import Osplaslogo from "../../images/osplash.png"
import downarrow from "../../images/down.png";
import { useNavigate } from "react-router-dom"
const Section=()=>{
    const navigate = useNavigate();
    return(
        <div className="Section-container">
        <div className="input-section">
        <input type="text" placeholder="People, emails, groups" onFocus={()=>{
            navigate("/invite");
        }} />
        <button>invite</button>
        </div>
        <div className="memberlist-container">
         <div className="default-list">
            <div className="left">
                <div style={{marginTop:"2px"}}>
                <img src={Osplaslogo} alt="logo" style={{borderRadius:"50%"}} />
                </div>
                <div>
                    <p style={{fontWeight:"600"}}>Everyone at OSlash</p>
                    <p style={{color:"grey",fontSize:"12px"}}>25 workspace members</p>
                </div>
               

            </div>
            <div className="right">
                <span style={{marginRight:"15px",color:"grey", fontSize:"12px"}}>No access</span>
                <img src={downarrow} alt="" />
            </div>
         </div>
         
        </div>
       
        </div>
    )
}

export default Section;