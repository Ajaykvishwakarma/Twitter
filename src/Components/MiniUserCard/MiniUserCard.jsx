import { Avatar, Button } from "@mui/material";
import "./MiniUserCard.css";

export const MiniUserCard = ({prof}) => {
    return(
        <div className="mini_profile_card">
            <Avatar className="mini_profile_avatar"/>
            <div className="mini_usernames">
                <div className="mini_dispname">{prof.dispName}</div>
                <div className="mini_username">@{prof.username}</div>
            </div>
            <Button className="follow_button">Follow</Button>
        </div>
    )
}