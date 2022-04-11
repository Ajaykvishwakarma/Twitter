import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Style from './Show.module.css';
// import { SidebarLink } from "../SidebarLinks/SidebarLink";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import { db } from '../../Configs/firebase';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import {useNavigate } from 'react-router';



export const Show = () => {

    //    const [ data, setData] = useState([]);
    //    const Navigate = useNavigate()
    //     useEffect(() => {
    //     db.collection("posts").onSnapshot((snapshot) => {
    //     snapshot.docs.map((doc) => console.log(doc.id))
    //     setData(snapshot.docs.map((doc) => doc.data()))
    //     }
    //     );
    //     },[])
    // console.log(data)
    const [posts, setPosts]  = useState([]);
    
    useEffect(() => {
      // db.collection("posts").onSnapshot((snapshot) => {
      //   snapshot.docs.map((doc) => console.log(doc.id));
      //   setPosts(snapshot.docs);
      // });
      let data1 = [];
      db.collection("posts").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
         data1.push({...doc.data(), postId: doc.id})

      
        })
         setPosts(data1)
      })
     
    },[])

    
    const handleLike = () => {



    }


    return (

        <>
        {posts.map((el) => {
            const like = el.likes.length || 0;
             const retweet = el.retweets.length || 0;
            
            const replie = el.replies.length || 0;

            // console.log(((((el.timeStamp).seconds)/60)/60)/24)
            
            return (
               
                
        <div className={Style.show_tweet_div}>
        <Link style={{textDecoration:"none", color:"black"}} to={`/replies/${el.postId}`}>
            <div className={Style.navShow}>
               <div>
                <Avatar alt="User Profile" src={el.avatar} style={{height:"75%", width:"60%", margin:"auto"}}/>
               </div>
               <div>
                  <span style={{fontWeight:"bold",color:"black"}}>{el.displayName}</span><span style={{marginLeft:"10px",color:"black"}}>@{el.username}</span>
                  <p style={{color:"black"}}>{el.text}</p>
               </div>
               <div><MoreHorizOutlinedIcon className={Style.logout_more} /></div>
            </div>
            
            {/* image */}

               
            <div className={Style.navShow_image}>
                <div></div>
                <div>
                    {el.image ?  <img src={el.image} alt =""  className={Style.postImage} /> : ""}
                    
                </div>
            </div>
            </Link>
            <div className={Style.reactions}>
                <div></div>
                <div>
                    <Link style={{textDecoration:"none"}} to={`/replies/${el.postId}`}>
                        <IconButton  size="large" aria-label="Image Selector" color="inherit"  >
                            <ReplyAllOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{replie}</span>
                        </IconButton>
                    </Link>
                    <Link style={{textDecoration:"none"}} to={`/replies/${el.postId}`}>
                        <IconButton className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                            <AutorenewIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{retweet}</span>
                        </IconButton>
                     </Link>
                     <IconButton className={Style.Icons} size="large" aria-label="Image Selector" onClick={handleLike} color="inherit"  >
                        <FavoriteBorderOutlinedIcon style={{color:"#1d9bf0"}}/><span style={{fontSize:"16px"}}>{like}</span>
                     </IconButton>
                     <IconButton  className={Style.Icons} size="large" aria-label="Image Selector" color="inherit"  >
                        <FileUploadOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                </div>
            </div>


        </div>
        
    
        )
     
    })}
    
    </>

    )

}