import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { SidebarLink } from "../SidebarLinks/SidebarLink";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import { db } from '../../Configs/firebase';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import IconButton from '@mui/material/IconButton';
import { useParams } from "react-router-dom";
import Style from './TweetActions.module.css';
import { Link } from "react-router-dom";
import { Replies } from "../RepliesTweet/Replies"

export const TweetActions = () => {

       const [ data, setData] = useState({});
       const {id} = useParams()
        useEffect(() => {
        db.collection("posts").doc(`${id}`).onSnapshot((snapshot) =>
        setData(snapshot.data())
        );
        },[])
    //  console.log(data.replies.forEach((el) => console.log(el)))


    return (
        <div className={Style.Show_container}>
              <div className={Style.fixedBar}>
              <Link style={{textDecoration:"none", color:"black"}} to={`/home`}> <ArrowBackIcon /> <span>Tweet</span> </Link>
              </div>  
      
          
            
        <div className={Style.show_tweet_div}>
            <div className={Style.navShow}>
               <div>
                <Avatar alt="User Profile" src={data.avatar} style={{height:"75%", width:"60%", margin:"auto"}}/>
               </div>
               <div>
                  <span style={{fontWeight:"bold"}}>"{data.displayName}"</span><br></br>
                  <span style={{marginLeft:"10px"}}>@{data.username}</span> 
                  
               </div>
               <div><MoreHorizOutlinedIcon className={Style.logout_more} /></div>
            </div>
            <div className={Style.post_text}>
            
                <h4>{data.text}</h4>
            </div>
            {/* image */}

               
            <div className={Style.navShow_image}>
                <div></div>
                <div>
                    {data.image ?  <img src={data.image}  className={Style.postImage} /> : ""}
                    
                </div>
            </div>
            <div className={Style.reactions}>
                <div></div>
                <div>
                     <IconButton  size="large" aria-label="Image Selector" color="inherit"  >
                        <ReplyAllOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{data.replies}</span>
                     </IconButton>
                     <IconButton className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                        <AutorenewIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{data.retweets}</span>
                     </IconButton>
                     <IconButton className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                        <FavoriteBorderOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{data.likes}</span>
                     </IconButton>
                     <IconButton  className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                        <FileUploadOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                </div>
            </div>


        </div>
       
      <Replies />
        {/* {data.replies.map((el) => {
            <div className={Style.all_replies}>
            <div className={Style.show_tweet_div}>
        <Link style={{textDecoration:"none", color:"black"}} to={`/replies/${el.postId}`}>
            <div className={Style.navShow}>
               <div>
                <Avatar alt="User Profile" src={el.avatar} style={{height:"75%", width:"60%", margin:"auto"}}/>
               </div>
               <div>
                  <span style={{fontWeight:"bold",color:"black"}}>{el.displayName}</span><span style={{marginLeft:"10px",color:"black"}}>@{el.username}</span> <span>.7h</span>
                  <p style={{color:"black"}}>{el.text}</p>
               </div>
               <div><MoreHorizOutlinedIcon className={Style.logout_more} /></div>
            </div> */}
            
            {/* image */}

               
            {/* <div className={Style.navShow_image}>
                <div></div>
                <div>
                    {el.image ?  <img src={el.image}  className={Style.postImage} /> : ""}
                    
                </div>
            </div>
            </Link>
            <div className={Style.reactions}>
                <div></div>
                <div>
                    <Link style={{textDecoration:"none"}} to={`/replies/${el.postId}`}>
                        <IconButton  size="large" aria-label="Image Selector" color="inherit"  >
                            <ReplyAllOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{"replie"}</span>
                        </IconButton>
                    </Link>
                    <Link style={{textDecoration:"none"}} to={`/replies/${el.postId}`}>
                        <IconButton className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                            <AutorenewIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{"retweet"}</span>
                        </IconButton>
                     </Link>
                     <IconButton className={Style.Icons} size="large" aria-label="Image Selector"  color="inherit"  >
                        <FavoriteBorderOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{"like"}</span>
                     </IconButton>
                     <IconButton  className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                        <FileUploadOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                </div>
            </div>
 */}

        {/* </div>
        </div>
     })} */}


    </div>

    )

}