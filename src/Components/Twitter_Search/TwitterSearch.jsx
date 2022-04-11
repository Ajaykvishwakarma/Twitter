import SearchIcon from '@mui/icons-material/Search';
import "./TwitterSearch.css";
import React, { useState, useCallback } from "react";
import { Avatar } from "@mui/material";
import {useNavigate}  from "react-router-dom"
import debounce from "lodash/debounce";
import { db } from "../../Configs/firebase";
export const Search = () => {
    const [value, setValue] = useState("");
    const [prof, setProf] = useState("");

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        if(value)
        {
            handleSearch(value);
        }
    };

    const handleSearch =  useCallback(
        debounce(async(value) => {
            let array = [];
            const data = await db.collection("users").get()
            data.forEach(doc => {
                array.push(doc.data().displayName)
            }); 
            var arr = []; 
            for(var i=0; i<array.length;i++){
                if(array[i].includes(value)){
                    data.forEach(doc => {
                        if(array[i] === doc.data().displayName)
                        {
                            arr.push(doc.data());
                        }
                    });
                }
            }
            setProf(arr);
           
        }, 1000),
        []
      );
    //   console.log(prof);
    return(
        <>
        <div className="widget_search_input">
                <SearchIcon className='widget_search_icon'/>
                <input id="search" type="text" onChange={handleChange}/>
            
        </div>
        <div className='searchResults' id="prof" style={{display: prof? "block": "none"}}>
        { prof?
         
            prof.map((elem)=>(
                <div className="mini_profile_card" id="mainS" onClick={(e) =>{

                    let username = e.target.parentNode.lastChild.textContent
                    username = username.substr(1)
                    profile()

                   async function profile(){
                    const data = await db.collection("users").get()
                        data.forEach(doc => {

                        if(username === doc.data().userName)
                        {
                            localStorage.setItem("profile",JSON.stringify(doc.data()))
                            navigate("/profile")
                        }
            }); 
             }
                }}>
                    <Avatar src={elem.avatar} className="mini_profile_avatar"/>
                    <div className="mini_usernames">
                        <div className="mini_dispname">{elem.displayName}</div>
                        <div className="mini_username">@{elem.userName}</div>
                    </div>
                </div>))
         
                :"none"
         
        }
          
    </div>
        </>
    )
}