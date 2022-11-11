import { useState } from "react";
import { createContext } from "react";
import p1 from "../../images/p1.png"
import p2 from "../../images/p2.png"
import E from "../../images/Eng.png";
import P from "../../images/product.png"

export const context=createContext();
export const ContextProvider=(props)=>{
    const members=[
        {
            name:"tom cook",
            email:"tomcook@gmail.com",
            profileImg:p1
        },
        {
            name:"jhon",
            email:"jhon@gmail.com",
            profileImg:p2

        },
        {
            name:"harsha",
            email:"harsha@gmail.com",
            profileImg:p2

        }
    ]
    const groups=[
        {   
            img:E,
            branch:"Engineering"
        },
        {   
            img:P,
            branch:"Product"
        }
    ];
const [grouplist,setGrouplist]=useState(groups);
const [selectedUser,setSelectedUser]=useState([]);
const [memberslist,setMemberlist]=useState(members);

    return(
        <context.Provider value={
            {memberslist,
            setMemberlist,
            selectedUser,
            setSelectedUser,
            grouplist,
            setGrouplist
            }}>
            {props.children}
        </context.Provider>
    )
} ;
