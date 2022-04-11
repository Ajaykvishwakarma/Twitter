import React from 'react';
import { useState } from "react"
import Styles from "./Step3.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link,useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"

import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber
  } from 'firebase/auth';
import { db } from "../../Configs/firebase";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



export const Step3 = () => {

    const user = useSelector((store)=>store.user) || JSON.parse(localStorage.getItem("Details")) || ""

    const [sms,setSms] = useState(false)
    const [num,setNum] = useState()

    let navigate = useNavigate()

    const auth = getAuth();
   function setUpRecaptcha(){
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            }
          }, auth);
    }   

    function onSignInSubmit(e){
        e.preventDefault()

      setUpRecaptcha()
      const phoneNumber = `${user.phone}`
      console.log("Phone ",phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      
      const auth = getAuth();
     
      signInWithPhoneNumber(auth, phoneNumber,appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("SMS Sent to Your Mobile Number")
        setSms(true)
      
        // ...
      }).catch((error) => {
          alert("Failed To send SMS")
          setSms(false)
        // Error; SMS not sent
    
      });
    }

    const onSubmitOtp = (e) =>{
      e.preventDefault()
      const code = `${num}`
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        if(user)
        {
          alert("Enter Password to complete Signup Process...")
          navigate("/signup/password")
        }
        
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert("Wrong OTP,Try Again")
        // ...
      });

    } 

    return (
        <>
            <div style={{display:sms?"none":"block"}} className={Styles.mainDiv}>
                <div className={Styles.crosss}> <Link to="/signup/accept"> <KeyboardBackspaceIcon /> </Link><h4 className={Styles.heading}>Step 3 of 3</h4></div>

                <div className={Styles.createAccount}><h2>Create your account</h2></div>
                <div className={Styles.innerDiv}>
                    <div className={Styles.inputField}>
                        <div className="floating mx-auto">
                            <div className="form-floating mb-3" >
                                <input type="text" className="form-control input-name" id="floatingInput" placeholder="name@example.com" value={user.name}/>
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control input-phone" id="floatingPassword" placeholder="Password" value={user.phone}/>
                                <label for="floatingPassword">Phone</label>
                            </div>
                            <div className="form-floating" id={Styles.birthDate}>
                                <input type="text" className="form-control input-phone" id="floatingPassword" placeholder="Password" value={user.dob}/>
                                <label for="floatingPassword">Birth date</label>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.belowPara} style={{marginTop:sms?"-5%":"5%"}}>
                    <p>     By signing up, you agree to our <span className={Styles.span}> <a className={Styles.atag}href="https://twitter.com/tos#new">Terms of Service</a>,<a className={Styles.atag} href="https://twitter.com/privacy">Privacy Policy</a> </span> and <span className={Styles.span}>
                        <a className={Styles.atag} href="https://support.twitter.com/articles/20170514">Cookie Use</a></span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy.<span className={Styles.span}> <a className={Styles.atag} href="https://twitter.com/privacy">Learn more</a> </span></p>
                    </div>
                    <div id="sign-in button" ></div>
                    <div className={Styles.nextBtnDiv}><button className={Styles.nextbtn} onClick={(e)=>{
                      
                      const data = {
                        avatar:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                        displayName:user.name,
                        dob:"01-01-2000",
                        emailId:"email@email.com",
                        followers:0,
                        following:0,
                        joinDate:new Date(),
                        likes:0,
                        mobileNo:user.phone,
                        password:"",
                        tweets:[],
                        userName: `${user.name.substr(0,4)}${user.phone.substr(3,4)}`,
                        verified:true,
                    }

                    const getData = async() =>{
                        const get = await db.collection("current_user").doc("activeUsers").get()
                        const addData = get.data()
                        db.collection("current_user").doc("activeUsers").set({...addData,ids:[...addData.ids,data.userName]})
                    }

                    getData()

                    localStorage.setItem("userInfo",JSON.stringify({
                        avatar:data.avatar,
                        displayName:data.displayName,
                      username:data.username,verified:true}))

                    let username = JSON.parse(localStorage.getItem("username"))
                    db.collection("users").doc(username).set(data)

                    onSignInSubmit(e)}}>Sign up</button></div>
                </div>
                <div>
              </div>

            </div>
            {/* popup box*/}
            <div style={{display:sms?"block":"none"}} className={Styles.mainDiv}>
                <div className={Styles.crosss}> <Link to="/signup/confirm"> <KeyboardBackspaceIcon /> </Link></div>
                  <svg className={Styles.twitterLogo} viewBox="0 0 24 24" aria-hidden="true" fill="#1d9bf0" ><g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g></svg >

                  <div className={Styles.createAccount}><h4>We sent to you a Code</h4></div>
                  <div className={Styles.verify}><p>Enter it below to verify {user.emph}</p></div>
                  <div className={Styles.innerDiv}>
                  <form action="" onSubmit={(e)=>{onSubmitOtp(e)}}>
                    <div className={Styles.inputField}>
                        <div className="floating mx-auto">
                            <div className="form-floating mb-3" >
                                <input type="text" className="form-control input-name" id="floatingInput" placeholder='Verification Code' onChange={(e)=>{setNum(e.target.value)}}/>
                                <label for="floatingInput">Verification Code</label>
                            </div>
                            <div className={Styles.subbtnDiv} ><button className={Styles.subbtn}  >Submit</button></div>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
                  
        </>
    )
}