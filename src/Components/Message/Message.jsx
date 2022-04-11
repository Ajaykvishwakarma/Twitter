
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components";
import { Sidebar } from '../Sidebar/Sidebar';
import { Widgets } from '../Widgets/Widgets';
const A = styled.div`
width: 100%;
margin:auto;
min-height:700px;
padding-bottom:20px;
padding-left:140px;
padding-right:20px;
padding-top:20px;
border:1px solid whitesmoke;
.heading{
  display: grid;
  grid-template-columns:270px 80px;
  margin-top: 10px;
  width: 350px;
  font-size: 20px;
  color: black;
  margin-bottom: 50px;
  border:1px solid whitesmoke;
  padding:5px;
}
.line{
  line-height: 1;
}
.coleb{
  color: black;
  font-size: xx-large;
  font-weight: bolder;
}
.midl{
  margin-top: 10px;

}
.btnc{
  font-size: larger;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
padding: 18px;
  width:250px;
  border-radius:25px;
  border:none;
  background-color:rgb(29,155,240) ;


}
.micon{
  margin-left: 5px;
}`
export function Messages() {
  return (
      <div style={{display:"flex"}}>
          <div><Sidebar /></div>
          <div style={{width:"48%", minHeight:"700px"}}>
          
            <A>
                <div className="heading">
                <div >Message</div>
                <div><SettingsIcon/><MailOutlineIcon className="micon"/></div>
            </div>
                <div className="coleb">Send a message,get</div>
                <div className="coleb">a mesage</div>
            <div className="midl">
                <div className="line">Direct Messages are private conversation</div>
                <div className="line">between you and other people on Twitter. Share</div>
                <div className="line">Tweets, media, and more!</div>
                </div>
                <button className="btnc">Start a conversation</button>
            </A>
            </div>
            <div><Widgets /></div>
     </div>
  )
}
