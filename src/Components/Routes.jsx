import React from 'react';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Step2 } from "./Register/Step2"
import { Step3 } from "./Register/Step3"
import { Routes, Route } from "react-router-dom"
import { EnterPass } from './Login/EnterPass';
import { Input } from '../Pages/input';
import { AuthHome } from './Auth-Home/Auth-home';
import { Buttons } from './Auth-Home/sign_login_button';
import { CreatePass } from './Register/create_pswd';
import { Home } from "./Home/Home";
import { TweetReply } from "./TweetReplyRoute/TweetReply"
import { Profile } from './Profile/Profile';
import { Messages } from './Message/Message';
import { Explore } from './Explore/Explore';
import { TweetPop } from './Tweet_Popup/Tweet_pop';


export const AllRoutes = () => {

    return <Routes>
            <Route path="/" element={<AuthHome />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/signup" element={<Register />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/login/enterpassword" element={<EnterPass />} />
            <Route path="/signup/accept" element={<Step2 />} />
            <Route path="/signup/confirm" element={<Step3 />} />
            <Route path="/input" element={<Input /> }/>
            <Route path="/signup/:password" element={ <CreatePass/> }/>
            <Route path="/replies/:id" element={<TweetReply />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/message' element={<Messages />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/tweet' element={<TweetPop />} />
        </Routes>
}
