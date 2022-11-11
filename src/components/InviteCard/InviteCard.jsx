// import Footer from "../cardFooter/Footer";
// import Header from "../CardHeader/Header";
// import Section from "../CardSection/section";
import InviteFooter from "../inviteFooter/inviteFooter";
import InviteHeader from "../inviteHeader/inviteHeader";
import InviteSection from "../InviteSection/inviteSection";
import "./inviteCard.css";
const Invite=()=>{
    return (
        <>
        <div className="card-container invite-container">
         <div className="header">
         <InviteHeader/>
         </div>
         <div style={{padding:"15px"}}>
            <InviteSection/>
         </div>
         <div className="footer">
        <InviteFooter/>
         </div>
        
        </div>
        </>
    )
}

export default Invite;