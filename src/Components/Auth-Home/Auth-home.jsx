import React from 'react';
import Styles from "./auth_home.module.css"
import {Buttons} from "./sign_login_button"
import { Link } from "react-router-dom"

export const AuthHome = () =>{
   const content = { google:["https://www.svgrepo.com/show/355037/google.svg","Google"],
    apple:["https://cdn.iconscout.com/icon/free/png-64/apple-853-675472.png","Apple"],
    twitter:"a Phone number"
  }

    return <>
    <div className={Styles.body}>
        <div className={Styles.image}>
            <img className={Styles.img} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vectorico.com%2Fdownload%2Fsocial_media%2FTwitter-Logo-WhiteOnBlue.jpg&f=1&nofb=1" alt="" />
        </div>
        <div className={Styles.content_part}>
            <div className={Styles.icon}>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="#1d9bf0" ><g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g></svg>
            </div>
            <div>
                <p id={Styles.happening}>Happening now</p>
            </div>
            <div>
                <p id={Styles.join}>Join Twitter today. </p>
            </div>
            <Buttons content={content.google} />
            <Buttons content={content.apple}/>
            <div id={Styles.line}> <div className={Styles.line2}></div> <span id={Styles.or}>or </span><div className={Styles.line2}></div> </div>
            
            <div className={Styles.signlogin} id={Styles.twitter}>
            <Link className={Styles.link} to={"/signup"}>
                <b > Sign up with {content.twitter} </b></Link> </div>
        
            <div className={Styles.terms}><p>By signing up, you agree to the <a className={Styles.a} href="https://twitter.com/en/tos">Terms of service </a>
            and <a className={Styles.a} href="https://twitter.com/en/privacy">Privacy Policy</a> including 
            <a className={Styles.a} href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"> Cookie Use</a> </p></div>
    
            <p id={Styles.account}>Already have an account?</p>
        
            <div className={Styles.signlogin}id={Styles.signin}>
            <b > <Link className={Styles.link} to={"/login"}>Sign in</Link> </b> </div>
        </div>
    </div>
    <div id={Styles.footer}>
      <a href="https://about.twitter.com/">About</a>
      <a href="https://help.twitter.com/">Help Center</a>
      <a href="https://twitter.com/tos">Terms of Service</a>
      <a href="https://twitter.com/privacy">Privacy Policy</a>
      <a href="https://support.twitter.com/articles/20170514">Cookies Policy</a>
      <a href="https://help.twitter.com/resources/accessibility">Accessibility</a>
      <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Ads Info</a>
      <a href="https://blog.twitter.com/">Blog</a>
      <a href="https://status.twitterstat.us/">Status</a>
      <a href="https://careers.twitter.com/">Careers</a>
      <a href="https://about.twitter.com/press/brand-assets">Brand Resources</a>
      <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise">Advertising</a>
      <a href="https://marketing.twitter.com/">Marketing</a>
      <a href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">Twitter for Business</a>
      <a href="https://developer.twitter.com/">Developers</a>
      <a href="https://twitter.com/i/directory/profiles">Directory</a>
    </div>
    <div id={Styles.lasline}><div id={Styles.set}><a id={Styles.atag} href="https://twitter.com/settings"> Settings </a> © 2022 Twitter, Inc</div></div>
    </>
}