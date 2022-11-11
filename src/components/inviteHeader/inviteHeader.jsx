import downArrow from "../../images/down.png"
import "./inviteHeader.css"

const InviteHeader=()=>{
    return(
        <div className="inviteHeader-container">
        <div className="input">
            <input type="text" placeholder="Search emails, names or groups" />
        </div>
        <div>
          <span style={{marginRight:"10px"}}>Full access</span> 
          <img src={downArrow} alt="" /> 
        </div>
        <div className="btn">
            <button>Invite</button>
        </div>
        </div>
    )
}

export default InviteHeader;