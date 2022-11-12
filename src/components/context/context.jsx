import { useState } from "react";
import { createContext } from "react";
import p1 from "../../images/p1.png"
import p2 from "../../images/p2.png"
import p3 from "../../images/p3.png"
import E from "../../images/Eng.png";
import P from "../../images/product.png"

export const context=createContext();
export const ContextProvider=(props)=>{
    var members=[
        {
            name:"Arlene Mccoy",
            email:"arlen@gmail.com",
            profileImg:p1,
            access:"No access"
           
        },
        {
            name:"jhon",
            email:"jhon@gmail.com",
            profileImg:p2,
            access:"No access"

        },
        {
            name:"tom cook",
            email:"tomcook@gmail.com",
            profileImg:p3,
            access:"No access"

        }
    ]
    var groups=[
        {   
            profileImg:E,
            branch:"Engineering",
            access:"No access"
        },
        {   
            profileImg:P,
            branch:"Product",
            access:"No access"
        }
    ];
const [grouplist,setGrouplist]=useState(groups);
var [selectedUser,setSelectedUser]=useState([]);
const [memberslist,setMemberlist]=useState(members);
const [isselect,setIsselect]=useState(false);


    return(
        <context.Provider value={
            {memberslist,
            setMemberlist,
            selectedUser,
            setSelectedUser,
            grouplist,
            setGrouplist,
            isselect,setIsselect
            }}>
            {props.children}
        </context.Provider>
    )
} ;
