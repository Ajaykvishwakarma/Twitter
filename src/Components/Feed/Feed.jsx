import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Style from './Feed.module.css';
import { Show } from "../ShowTweet/Show";
import { useState, useEffect } from "react";
import { db } from '../../Configs/firebase';
import {storage} from "../../Configs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export  function Feed() {
 

   const  [ tweetMsg, setTweetMsg ] = useState("");
   const [tweetImage, setTweetImage] = useState("");
   const [like, setLike] = useState([]);
   const [replie, setReplie] = useState([]);
   const [retweet, setRetweet] = useState([]);

   

   
   const fileSubmit = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      uploadFiles(file);
      
   };

   const uploadFiles = (file) => {
      if(!file){
         return;
      }
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
         
      }, (err) => {console.log(err)},
      () => {
         
         getDownloadURL(uploadTask.snapshot.ref)
         .then((url) => {setTweetImage(url)});
      });

      
   }

   var userInf = JSON.parse(localStorage.getItem("userInfo"))
   var user = JSON.parse(localStorage.getItem("username"))
    const handleTweet = (e) => {
      e.preventDefault();
      const date = new Date();

      db.collection("posts").add({
       
        displayName: userInf.displayName,
        username: user,
        verified: true,
        text: tweetMsg,
        image: tweetImage,
        avatar: userInf.avatar,
         likes:like,
         replies:replie,
         retweets:retweet,
         timeStamp: date,
        
       
      });
      setTweetMsg("")
      setTweetImage("")
      setLike([])
      setReplie([])
      setRetweet([])
   } 
   
   // File Selecter 


  
   

  return (
 
    <div id={Style.feedcontainer}>
   {/* <ElevateAppBar className="static_header"/> */}
   <div className={Style.fixedBar}>
      <h3>Home</h3>
   </div>
        <div className={Style.tweetDiv}>
        
            <div><Avatar alt="User Profile" src={userInf.avatar} style={{height:"30%", width:"60%", margin:"auto", marginTop:"30%"}}/></div>
            <div className={Style.tweetDiv2}>
               <form >
                <div >
                 <input  className = {Style.tweetInput} value={tweetMsg.tweetInput} onChange={(e) => setTweetMsg(e.target.value)} type="text" placeholder="What's happening? " />
                 
                     
                </div>
                


                <div>
                  
                    {/* <Button onClick={() => this.fileInput.click()}>T</Button> */}
                     {/* <IconButton size="large" aria-label="Image Selector" color="inherit"  >
                        <InsertPhotoOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton> */}
                      <label htmlFor="raised-button-file">
                      <IconButton size="large" aria-label="Location" color="inherit" variant="raised" component="span">
                         <InsertPhotoOutlinedIcon style={{color:"#1d9bf0"}}/>
                      </IconButton>
                      </label>
                      <label htmlFor="raised-button-file">
                     <IconButton size="large" aria-label="GIF Selector" color="inherit" variant="raised" component="span">
                        <GifBoxOutlinedIcon  style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     </label>
                     <IconButton size="large" aria-label="Create Poll" color="inherit">
                        <PollIcon  style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="emoji" color="inherit">
                        <SentimentSatisfiedAltIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="Location" color="inherit">
                        <FmdGoodOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     
                     {/* <Button htmlFor="raised-button-file2" size="large" aria-label="Image Selector" color="inherit"  >
                        <FileUploadOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </Button> */}
                     
                    <Button variant="contained" onClick={handleTweet}  className= {Style.tweetBtn}  type="submit" >Tweet</Button>
               
                </div>
                </ form> 
                <form onSubmit={fileSubmit}>
                     <input style={{display:"none"}} accept="image/*" multiple  type="file"  id="raised-button-file"/>
                     
            
                      <input  id={Style.raised_button_file2}    type="submit" value="Upload" />
                     
                </form>
               
                  {/* 
                  <button onClick={fileSubmit} >Upload</button> */}
                
            </div>
        </div>

        {/* Show tweet */}

        <Show />

    </div>
  );
}
