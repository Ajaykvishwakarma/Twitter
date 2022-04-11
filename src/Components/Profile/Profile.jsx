import Styles from "./Profile.module.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./Profile.module.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Show } from '../ShowTweet/Show';
import { Widgets } from '../Widgets/Widgets';
import { Sidebar } from '../Sidebar/Sidebar'
export const Profile = () => {
    var userInf = JSON.parse(localStorage.getItem("userInfo"))


    const name = userInf.displayName
    const totalTweets = userInf.tweets;
    const username = userInf.userName;
    // const joinedDate = userInf.joinDate.second;
    const following = userInf.following;
    const followers = userInf.followers;
    const bio = "Mern Stack Developer"


    return (
        <>

            <div className={Styles.mainDiv}>

                <div className={Styles.leftNav}> <Sidebar /> </div>


                <div className={Styles.profile}>

                    <div className={Styles.username}>
                        <div className={Styles.backLogo}> <KeyboardBackspaceIcon /></div>
                        <div className={Styles.nameAndTweets}><p className={Styles.namee}>{name}</p> <br />  <div className={Styles.tweets}>{totalTweets} tweets</div></div>
                    </div>

                    <div className={Styles.backgroundImg}></div>
                    <div className={Styles.profileImg}><img src={userInf.avatar ? userInf.avatar : ""} alt="" /> <button className={Styles.editProfile}>Edit Profile</button></div>
                    <div className={Styles.userDetails}>
                        <h4>{name}</h4>
                        <div className={Styles.usernameadd}><p>@{username}</p></div>

                        <div className="bio">{bio}<p></p></div>

                        <div className={Styles.joinedDate}><CalendarMonthIcon />  <span> Joined {userInf.joinDate.Date}</span> </div>

                    </div>

                    <div className={Styles.followStatus}>
                        <div className="following"> <strong>{following} </strong>  following</div>
                        <div className={Styles.followers}><strong>{followers} </strong>  followers</div>
                    </div>


                    <div className={Styles.tabs}>

                        <button className={Styles.tabsbtn}>Tweets</button>
                        <button className={Styles.tabsbtn}>Tweets & replies</button>
                        <button className={Styles.tabsbtn}>Media</button>
                        <button className={Styles.tabsbtn}>Likes</button>

                    </div>
                   

                    <Show />
                </div>
                
                <div className={Styles.rightNav}>
                    <Widgets />
                </div>

            </div>

        </>
    )
}