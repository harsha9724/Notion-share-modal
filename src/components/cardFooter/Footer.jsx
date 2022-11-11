import "./footer.css";
import questionIcon from "../../images/question.png"
import iconlink from "../../images/Iconlink.png"

const Footer=()=>{
   return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={questionIcon} alt="" style={{marginRight:"10px"}}/>
        <span style={{color:"grey"}}>learn about sharing</span>
      </div>
      <div className="footer-right">
         <img src={iconlink} alt="" style={{fontWeight:"600",marginRight:"10px"}} />
         <span style={{fontWeight:"600"}}>Copy link</span>
      </div>
    </div>
   )
}

export default Footer;