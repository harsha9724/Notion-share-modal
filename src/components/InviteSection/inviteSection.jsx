import { useContext } from "react"
import { context } from "../context/context"
import "./inviteSection.css"

const InviteSection=()=>{
    const {memberslist,grouplist,selectedUser,setSelectedUser,isselect,setIsselect}=useContext(context);
/** fuction to check the person is selected or not */
    const  checkSelected=(data)=>{
    let usercount=0;
    let branchcount=0;
     for(let i=0;i<selectedUser.length;i++){
        if(selectedUser[i].name==data.name) {
            usercount++;
        }
        if(selectedUser[i].branch==data.branch){
            branchcount++
        }
     }
   if(usercount==0 || branchcount==0){
    return false
   }
   else{
    return true
   }
}

/*  function to update selected list */
    const handleSelect=(data)=>{
        if(checkSelected(data)){
            return 
        }
        else{
            // setIsselect(!isselect);
            setSelectedUser([...selectedUser,data]);
            // localStorage.setItem("selectedlist",data);
            // if(localStorage.getItem("selectedUser")==null){
            //     localStorage.setItem("selectedUser",' []')
            // }
            // var oldData=JSON.parse(localStorage.getItem("selectedUser"));
            // oldData.push(data);
            // localStorage.setItem("selectedUser",JSON.stringify(oldData));
        }
       
    }
    return(
        <>
        <div style={{marginBottom:"10px",fontWeight:"600",fontSize:"20px"}}>Select a person</div>
        {
            memberslist.slice(0,2).map((member,i)=>{
                return(
                    <div className="member-container" key={i} onClick={()=>handleSelect(member)} >                  
                        <img src={member.profileImg} alt="" />
                        <h6 style={{marginTop:"10px"}}>{member.name}</h6>              
                    </div>
                )
            })
        }
         <div style={{marginBottom:"10px",marginTop:"20px",fontWeight:"600",fontSize:"20px"}}>Select a group</div>
        {
           grouplist.slice(0,2).map((group,i)=>{
                return(
                    <div className="member-container" key={i} onClick={()=>handleSelect(group)}>
                        <img src={group.img} alt="" />
                        <h6 style={{marginTop:"10px"}}>{group.branch}</h6>  
                    </div>
                )
            })
        }
        </>
    )
}

export default InviteSection