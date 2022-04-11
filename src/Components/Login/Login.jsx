import React, {useState} from 'react';
import Styles from "./Login.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ClearIcon from '@mui/icons-material/Clear';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router-dom"
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
  } from 'firebase/auth';

import {useNavigate } from 'react-router';
import {db} from "../../Configs/firebase";

export const Login = () => {

    const navigate = useNavigate()

    const [login,setLogin] = useState()

    const googleAuth = async (e) =>{
        
        try{
            var provider = new GoogleAuthProvider();
            const add = await signInWithPopup(getAuth(), provider);
            
            if(add)
            {   
                const{email} = add.user.reloadUserInfo
                const username = email.substr(0,email.indexOf("@"))
                
                const data = await db.collection("users").doc(username).get()
                const get = await db.collection("current_user").doc("activeUsers").get()
                if(data.data() === undefined)
                {
                    alert("User is not registered")
                    navigate("/")
                }
                else
                {
                    const {avatar,displayName,userName} = data.data()
                    const addData = get.data()
                    db.collection("current_user").doc("activeUsers").set({...addData,ids:[...addData.ids,userName]})
                    
                    localStorage.setItem("username",JSON.stringify(userName))
                    localStorage.setItem("userInfo",JSON.stringify({avatar,displayName,username:userName,verified:true}))
                    
                    alert("Signin successfull")
                    navigate("/home") //HOMEPAGE
                }
                
                
            }
        }
        catch(error)
        {
            console.error("error",error)
            alert("Something went Wrong...  Try Again")
        }
    }

    // Phone Auth
    const checkUser = async(e) =>
    {
        e.preventDefault()
        if(login[0] === "+")
        {

            let exist = false;
            const data = await db.collection("users").get()
            const get = await db.collection("current_user").doc("activeUsers").get()
            data.forEach(doc => {

                if(login === doc.data().mobileNo)
                {
                    let username = doc.data().userName;
                    localStorage.setItem("username",JSON.stringify(username))

                    const addData = get.data()
                    db.collection("current_user").doc("activeUsers").set({...addData,ids:[...addData.ids,username]})
                    
                    exist = true
                }
             })
            if(exist)
            {
                localStorage.setItem("phone",JSON.stringify(login))
                navigate("/login/enterpassword")
            }
            else
            {
                alert("User Doesn't Exists")
            }
                
        }
        else
        {
            alert("Enter Phone with + country code")
        }
    }


    return <>
            <div className={Styles.mainDiv}>
                <div className={Styles.crosss}> <Link to="/"> <ClearIcon /></Link></div>
                <div className={Styles.innerDiv}>
                    <div className={Styles.logo}>

                    <svg className={Styles.twitterLogo} viewBox="0 0 24 24" aria-hidden="true" fill="#1d9bf0" ><g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g></svg>
                    </div>


                    <div className={Styles.createAccount}><h2>Sign in to Twitter</h2></div>

                    <form action="">

                        <div className="d-grid gap-2">
                            <button className="btn btn-Light " id={Styles.btnn} type="button" onClick={()=>{alert("Google Process starts...");googleAuth()}}><GoogleIcon /> Sign in with Google</button>
                            <button className="btn btn-Light " id={Styles.btnn2} type="button"><AppleIcon /> Sign in with Apple </button>
                        </div>

                        <div class={Styles.divider}>
                            <hr class={Styles.left} />or<hr class={Styles.right} />
                        </div>

                        {/* <div className="spanHr"><div className="hr11"><hr className="hr1" /> </div><span>or</span>  <div className="hr22"><hr className="hr2" /></div> </div> */}
                        <div className={Styles.inputField}>
                            <div className="floating mx-auto">
                                <div class="form-floating mb-3">
                                    <input type="text" className="form-control input-name" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setLogin(e.target.value)}}/>
                                    <label for="floatingInput">Phone with Country Code</label>
                                </div>

                            </div>
                        </div>

                        <div className={Styles.nextBtnDiv}> <button id={Styles.nextbtn} onClick={(e)=>{checkUser(e)}}>Next</button></div>

                        <div className="forgotPassDiv"><button id={Styles.forgotPassbtn}>Forgot password?</button></div>
                    </form>
                </div>

            </div>
        </>
    
}