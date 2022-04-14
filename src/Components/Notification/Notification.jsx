import  Style  from './Notification.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Widgets } from '../Widgets/Widgets';
import {Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export function Notification() {

  return (
    <div className={Style.notification}>
      <div><Sidebar /></div>
      <div> 
      <div className={Style.fixedBar}>
      <Link style={{textDecoration:"none", color:"black", marginBottom:"10px"}} to={`/home`}> <ArrowBackIcon /> </Link>
       <span style={{fontSize:"30px", marginTop:"20px"}}>Notification</span>
      </div>
      </div>
      <div><Widgets /></div>
    </div>
  )
  
 
}
