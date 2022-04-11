import {Avatar} from "@mui/material"
import React,{useState} from "react"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./Logout.css";
// import {db} from "../../Configs/firebase"
import { useNavigate } from "react-router-dom";

export const Logout = ({user}) => {

    const cur_user_id = JSON.parse(localStorage.getItem("userInfo"));
    const [logout,setLogout] = useState(false)
    const navigate = useNavigate()
    return(
        <>
        <div className="logOut">
            <Avatar className="sidebar__avatar" src={cur_user_id.avatar}/>
            <div className="sidebar_user">
                <div className="logout_dispname">{cur_user_id.displayName}</div>
                <div className="logout_username">@{cur_user_id.displayName}</div>
            </div>
            <MoreHorizOutlinedIcon className="logout_more" onClick={()=>{setLogout(logout?false:true)}}/>
        </div>
        <div className="logoutBox" style={{display:logout?"unset":"none"}}>
            <button className="logBtn" onClick={()=>{
                // db.collection("current_user").doc("activeUsers").delete()
                localStorage.setItem("userInfo",JSON.stringify(""))
                localStorage.setItem("username",JSON.stringify(""))
                navigate("/")
            }}>Logout</button>
        </div>

        
    </>
    )
}