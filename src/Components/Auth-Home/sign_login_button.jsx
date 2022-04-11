import React from 'react';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
  } from 'firebase/auth';

import Styles from "./auth_home.module.css"
import {useNavigate } from 'react-router';
import {db} from "../../Configs/firebase"

export const Buttons = ({content}) =>{
    
    const Navigate = useNavigate()

    let styles = {}
    if(content[1]==="Apple")
    {
        styles = {color:"black",fontWeight:"900"}
    }
    else
    {
        styles = {color:"rgb(73, 72, 72)",fontWeight:"100"}
    }

    const Auth = async (e) =>{
        
        try{
            var provider = new GoogleAuthProvider();
            const add = await signInWithPopup(getAuth(), provider);
            if(add)
            {    alert("Sign up Succesfull")
                const{createdAt,displayName,email,emailVerified,photoUrl} = add.user.reloadUserInfo

                localStorage.setItem("userInfo",JSON.stringify({avatar:photoUrl,displayName,
                    username:email.substr(0,email.indexOf("@")),verified:true}))
                    
                const data = {
                    avatar:photoUrl,
                    displayName,
                    dob:"01-01-2000",
                    emailId:email,
                    followers:0,
                    following:0,
                    joinDate:new Date(+createdAt),
                    likes:0,
                    mobileNo:"none",
                    password:"",
                    tweets:[],
                    userName: email.substr(0,email.indexOf("@")),
                    verified:emailVerified
                }
                localStorage.setItem("Details",JSON.stringify(""))
               db.collection("users").doc(data.userName).set(data)
                
               const get = await db.collection("current_user").doc("activeUsers").get()
               const addData = get.data()
               db.collection("current_user").doc("activeUsers").set({...addData,ids:[...addData.ids,data.userName]})
               Navigate("/home") // Homepage
            }
        }
        catch(error)
        {
            alert("Something went Wrong...  Try Again")
        }
    }

    return <div className={Styles.signlogin} value={content[1]} onClick={(e)=>{alert("Authentication starts...."); Auth(e)}}>
        <img id={Styles.btnicon} src={content[0]} alt="" />
        <span style={styles}>Sign up with {content[1]} </span>
    </div>
}