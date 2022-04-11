import React from 'react';
import { useState } from "react"
// import { initializeApp } from 'firebase/app';
import { useNavigate } from "react-router-dom";
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber
  } from 'firebase/auth';

// import { getFirebaseConfig } from "../firebase-config.js";

// const firebaseAppConfig = getFirebaseConfig();
// initializeApp(firebaseAppConfig);

export const Input = () =>{
    const [num,setNum] = useState({
      mobile:"",
      otp:""
    })
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
      const phoneNumber = `+91${num.mobile}`
      console.log("Phone",phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
          alert("SMS sent")
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
          console.log("EROOR",error)
        // Error; SMS not sent
        // ...
      });
    }
    

    const onSubmitOtp = (e) =>{
      e.preventDefault()
      const code = `${num.otp}`
      console.log("COde",code)
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        if(user)
        {
          console.log("Helo")
          navigate("/")
        }
        
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert("Wrong OTP,Try Again")
        // ...
      });

    } 


    return <div>
        <form action="" onSubmit={(e)=>(onSignInSubmit(e))}>
          <input type="text" name="" id="" onChange={(e)=>{setNum({...num,mobile:e.target.value})}} />
          <div id="sign-in button" ></div>
          <button>Submit</button>
        </form>
        <form action="" onSubmit={(e)=>{onSubmitOtp(e)}}>
        <input type="text" onChange={(e)=>{setNum({...num,otp:e.target.value})}}/>
        <button>Submit</button>
        </form>
    </div>
}
