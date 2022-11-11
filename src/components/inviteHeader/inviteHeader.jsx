import downArrow from "../../images/down.png"
import "./inviteHeader.css"
import { useContext } from "react"
import { context } from "../context/context";
import cancel from "../../images/Vectorcross.png"

const InviteHeader=()=>{
    const {setMemberlist,memberslist,grouplist,setGrouplist,selectedUser, setSelectedUser}=useContext(context);
  /** function to filter */
    const myfunction=(e)=>{
        let search=e.target.value.toUpperCase().trim();
        if(search===""){
            document.location.reload();
        }
        let updatedGroup=[...grouplist];
        updatedGroup=updatedGroup.filter((group)=>{
            let name=group.branch.toUpperCase();
            return name.indexOf(search) !==-1
        })
        let updatedList=[...memberslist]
       updatedList=updatedList.filter((member)=>{
        let name=member.name.toUpperCase();
        return name.indexOf(search) !== -1;
       });
       setGrouplist(updatedGroup);
      setMemberlist(updatedList);
    }
    /** function to cancel selected user */
    const handleCancel=(idx)=>{
     let filerarry=selectedUser.filter((user,i)=>{
        return i!==idx;
     })
     if(filerarry.length==0){
        document.location.reload();
     }
    setSelectedUser(filerarry);
    var oldData=JSON.parse(localStorage.getItem("selectedUser"));
    oldData.splice(idx,1);
    localStorage.setItem("selectedUser",JSON.stringify(oldData));
    }
    return(
        <div className="inviteHeader-container">
        <div className="input">
            {
     (selectedUser.length==0) ?   <input type="text" placeholder="Search emails, names or groups"  onChange={myfunction}  />: 
        selectedUser.map((user,i)=>{
            return(
                <span className="selected-name" key={i}>
                    {
                        (user.name==undefined)?   <span >{user.branch}</span>:<span >{user.name}</span>
                    }
                  
                    <img src={cancel} alt="" style={{height:"10px",marginTop:"3px",cursor:"pointer"}} onClick={()=>{handleCancel(i)}}/>
                </span>                
            )
        })  
            }
          
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