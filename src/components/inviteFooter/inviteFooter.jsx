import questionIcon from "../../images/question.png"

const InviteFooter=()=>{
    return(
        <>
    <div className="footer-container">
      <div className="footer-left">
        <img src={questionIcon} alt="" style={{marginRight:"10px"}}/>
        <span style={{color:"grey"}}>learn about sharing</span>
      </div>
    </div>
        </>
    )
}

export default InviteFooter;