import downArrow from "../../images/down.png";
import "./inviteHeader.css";
import { useContext } from "react";
import { context } from "../context/context";
import cancel from "../../images/Vectorcross.png";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const InviteHeader = () => {
    const navigate=useNavigate()
    const [selectedaccess,setSelectedAccess]=useState("No access");
  var {
    setMemberlist,
    memberslist,
    grouplist,
    setGrouplist,
    selectedUser,
    setSelectedUser,
    isselect,
    setIsselect,
  } = useContext(context);
  /** function to filter */
  const myfunction = (e) => {
    let search = e.target.value.toUpperCase().trim();
    if (search === "") {
      document.location.reload();
    }
    let updatedGroup = [...grouplist];
    updatedGroup = updatedGroup.filter((group) => {
      let name = group.branch.toUpperCase();
      return name.indexOf(search) !== -1;
    });
    let updatedList = [...memberslist];
    updatedList = updatedList.filter((member) => {
      let name = member.name.toUpperCase();
      return name.indexOf(search) !== -1;
    });
    setGrouplist(updatedGroup);
    setMemberlist(updatedList);
  };
  /** function to cancel selected user */
  const handleCancel = (idx) => {
    let filerarry = selectedUser.filter((user, i) => {
      return i !== idx;
    });
    if (filerarry.length == 0) {
      document.location.reload();
    }
    setSelectedUser(filerarry);
    // var oldData = JSON.parse(localStorage.getItem("selectedUser"));
    // oldData.splice(idx, 1);
    // localStorage.setItem("selectedUser", JSON.stringify(oldData));
  };
function checkPresentData(arr,data){
  for(let i=0;i<arr.length;i++){
    if(arr[i].name==data.name){
      return i
    }
  }
return -1;
}
  const handleInvite=()=>{
        if(selectedUser.length==0){
            return
        }
        else if(selectedUser.length==1){
            let [data]=selectedUser;
           data.access=selectedaccess;
            console.log(data.access);
            if(localStorage.getItem("selectedUser")==null){
                localStorage.setItem("selectedUser",'[]')
            }
            var oldData=JSON.parse(localStorage.getItem("selectedUser"));
            let i=checkPresentData(oldData,data);
             console.log(i);
             if(i==-1){
                oldData.push(data); 
                localStorage.setItem("selectedUser",JSON.stringify(oldData));  
             }
             else{
              oldData[i].access=selectedaccess;
              localStorage.setItem("selectedUser",JSON.stringify(oldData)); 
             }
             navigate("/")
                   document.location.reload();
             
        }
        // else{
        //     // for(let i=0;i<selectedUser.length;i++){
        //     //      let data=selectedUser[i];
        //     //      data.access=selectedaccess;
        //     //      console.log(data.access);
        //     //      if(localStorage.getItem("selectedUser")==null){
        //     //         localStorage.setItem("selectedUser",' []')
        //     //     }
        //     //      var oldData=JSON.parse(localStorage.getItem("selectedUser"));
        //     //      for(let j=0;j<oldData.length;j++){
        //     //         if((oldData[j].name==data.name)){
        //     //             // oldData.access=selectedaccess;
        //     //            oldData[j].access=selectedaccess;
        //     //            console.log(oldData[j]);
        //     //          localStorage.setItem("selectedUser",JSON.stringify(oldData[j]));
        //     //         }  
        //     //      }
        //     //      oldData.push(data);
        //     //      localStorage.setItem("selectedUser",JSON.stringify(oldData));
                      

        //     // }
        //     // for(let i=0;i<selectedUser.length;i++){
        //     //   var oldData=JSON.parse(localStorage.getItem("selectedUser"));

        //     // }
        //     // console.log(selectedUser);
        // }
        else{
          alert("please select one person")
        }
  }
  return (
    <div className="inviteHeader-container">
      <div className="input">
        {selectedUser.length == 0 ? (
          <input
            type="text"
            placeholder="Search emails, names or groups"
            onChange={myfunction}
          />
        ) : (
          selectedUser.map((user, i) => {
            return (
              <span className="selected-name" key={i}>
                {user.name == undefined ? (
                  <span>{user.branch}</span>
                ) : (
                  <span>{user.name}</span>
                )}

                <img
                  src={cancel}
                  alt=""
                  style={{
                    height: "10px",
                    marginTop: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCancel(i);
                  }}
                />
              </span>
            );
          })
        )}
      </div>
      <div className="drop-down-container">
        {isselect ? (
          <DropdownButton
            title="Full access"
            id="dropdown-menu-align-right"
            onSelect={(e) => setSelectedAccess(e)}
            variant="none"
          >
            <Dropdown.Item eventKey="Full Access">Full Access</Dropdown.Item>
            <Dropdown.Item eventKey="Can edit">Can edit</Dropdown.Item>
            <Dropdown.Item eventKey="Can view">Can view</Dropdown.Item>
            <Dropdown.Item eventKey="No access" style={{color:"red"}}>No access</Dropdown.Item>
          </DropdownButton>
        ) : (
          <>
            {" "}
            <span style={{ marginRight: "10px" ,marginTop:"20px"}}>
              <Dropdown.Toggle
             variant="failure"
               title="Full access"
               id="dropdown-menu-align-right"
                onClick={() => {
                  if (selectedUser.length > 0) {
                    return setIsselect(!isselect);
                  }
                }}
              >
                Full access
              </Dropdown.Toggle>
            </span>
          </>
        )}
      </div>
      <div className="btn">
        
        <button onClick={handleInvite}>Invite</button>
      </div>
    </div>
  );
};

export default InviteHeader;
