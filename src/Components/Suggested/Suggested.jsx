import { useState } from "react";
import { MiniUserCard } from "../MiniUserCard/MiniUserCard";
import "./Suggested.css";

export const Suggested = () => {
    const [users, setUsers] = useState([{
        username: "username",
        dispName: "displayname",
        avatar: ""
    },
    {
        username: "username",
        dispName: "displayname",
        avatar: ""
    },
    {
        username: "username",
        dispName: "displayname",
        avatar: ""
    }])
    return(
        <div>
            {users.map(user => {return(
                <MiniUserCard prof={user}/>
            )})}
        </div>
    )
}