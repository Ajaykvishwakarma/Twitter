import React from 'react';
import Styles from "../Register/Step2.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
export const Step2 = () => {
    return (
        <>
            <div className={Styles.mainDiv}>
                <div className={Styles.crosss}><Link to="/signup"> <KeyboardBackspaceIcon /> </Link><h4 className={Styles.heading}>Step 2 of 3</h4></div>
                <div className={Styles.createAccount}><h2>Customise your experience</h2></div>

                <div className="exp">
                    <h4 className={Styles.createAccount}>Track where you see Twitter content across the web</h4>
                    <div className={Styles.twitterUses} ><p>Twitter uses this data to personalise your experience. This web browsing history will never be stored with your name, email, or phone number.</p> <div><Checkbox defaultChecked={true} /> </div> </div>
                </div>
                <div className={Styles.belowPara}>
                    <p>     By signing up, you agree to our <span className={Styles.span}> <a className={Styles.atag}href="https://twitter.com/tos#new">Terms of Service</a>,<a className={Styles.atag} href="https://twitter.com/privacy">Privacy Policy</a> </span> and <span className={Styles.span}>
                        <a className={Styles.atag} href="https://support.twitter.com/articles/20170514">Cookie Use</a></span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy.<span className={Styles.span}> <a className={Styles.atag} href="https://twitter.com/privacy">Learn more</a> </span></p>
                </div>

                <div className={Styles.nextBtnDiv}>  <Link to="/signup/confirm"> <button className={Styles.nextbtn}>Next</button></Link> </div>
            </div>
        </>
    )
}