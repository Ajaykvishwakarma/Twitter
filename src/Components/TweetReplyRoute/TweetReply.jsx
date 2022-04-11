
// import { Route  } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Feed } from "../Feed/Feed";
import { Sidebar } from "../Sidebar/Sidebar";
import { Widgets } from "../Widgets/Widgets"
import  Style  from "./TweetReply.module.css"
import { TweetActions } from "../TweetAction/TweetActions"
export const TweetReply = () => {

   return (
       <div className={Style.pages}>
        <Sidebar />
        {/* <Feed /> */}
        <TweetActions />
        <Widgets />

    
       </div>
   )

}