import TwitterIcon from '@mui/icons-material/Twitter';
import { SidebarLink } from '../SidebarLinks/SidebarLink';
import { Logout } from '../Logout/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Button} from "@mui/material"
import "./Sidebar.css";
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <div className="sideBar">
      {/* Icon */}
      <TwitterIcon className= "home_twitterIcon" />
      
      {/* Option */} 
      <Link style={{textDecoration:"none", color:"black"}} to={`/home`}>
         <SidebarLink  active Icon={HomeRoundedIcon} text="Home"/>
      </Link>
      {/* Option */}
      <Link style={{textDecoration:"none", color:"black"}} to={`/explore`}>
         <SidebarLink  Icon={ExploreOutlinedIcon} text="Explore"/>
      </Link>

      <Link style={{textDecoration:"none", color:"black"}} to={`/notification`}>
         <SidebarLink  Icon={NotificationsOutlinedIcon} style={{height:"30px", width:"30px", marginLeft:"20px"}} text="Notifications"/>
      </Link>

      <Link style={{textDecoration:"none", color:"black"}} to={`/message`}>
      <SidebarLink  Icon={MailOutlinedIcon} text="Messages"/>
      </Link>

      <Link style={{textDecoration:"none", color:"black"}} to={`/profile`}>
      <SidebarLink  Icon={PermIdentityOutlinedIcon} text="Profile"/>
      
      </Link>

      <Link style={{textDecoration:"none", color:"black"}} to={`/more`}>
      <SidebarLink  Icon={MoreHorizOutlinedIcon} text="More"/>
      </Link>

      {/* Tweet Button */}
      <Button className= "sidebar__tweet_button" variant='outlined'  fullWidth>
      <Link style={{textDecoration:"none", color:"black"}} to={`/tweet`}>
        Tweet
        </Link>
      </Button>
      
      {/* Logout */}
      <Logout user="userName"/>
    </div>
    
  )
}
