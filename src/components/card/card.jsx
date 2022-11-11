import Footer from "../cardFooter/Footer";
import Header from "../CardHeader/Header";
import Section from "../CardSection/section";
import "./card.css"


const Card=()=>{
    return (
        <div className="card-container">
         <div className="header">
            <Header/>
         </div>
         <div style={{padding:"15px"}}>
         <Section/>
         </div>
         <div className="footer">
            <Footer/>
         </div>
        
        </div>
    )
}


export default Card;