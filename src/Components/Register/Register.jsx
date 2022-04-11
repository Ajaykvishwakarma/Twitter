// import "./register.css"
import React,{useState}from 'react';
import Styles from "./register.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ClearIcon from '@mui/icons-material/Clear';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {user_details} from "../../Redux/Users/action"
import {db} from "../../Configs/firebase";

export const Register = () => {

    let navigate = useNavigate()

    const [detail,setDetail] = useState({
        name:"",
        phone:"",
        dob:""
    })
    const dispatch = useDispatch()

    let date = [];
    let dis = true;
    if(detail.name !=="" && detail.phone !== "" && detail.dob !== "")
    {
        dis = false;
    }
    
    return (
        <>
            <div className={Styles.mainDiv}>
                <div className={Styles.logo}>
                    <div className={Styles.cross}> <Link to="/"><ClearIcon /> </Link> </div>
                    <svg className={Styles.twitterLogo} viewBox="0 0 24 24" aria-hidden="true" fill="#1d9bf0" ><g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g></svg >
                </div>


                <div className={Styles.createAccount}><h2>Create your account</h2></div>

                <form action="">
                    <div className={Styles.inputField}>
                        <div className="floating mx-auto">
                            <div className="form-floating mb-3" >
                                <input type="text" className="form-control input-name" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setDetail({...detail,name:e.target.value})}}/>
                                <label for="floatingInput">Enter Your Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control input-phone" id="floatingPassword" placeholder="Code" onChange={(e)=>{setDetail({...detail,phone:e.target.value})}}/>
                                <label for="floatingPassword">Enter Phone with Country code. +91...</label>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.useEmail}></div>


                    <h5>Date of birth</h5>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

                    <div className="DOB"  >
                        <div className="row g-2">
                        <div className="col-md">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e)=>{date.push(e.target.value)}}>
                                        <option selected>Select Date</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>

                                    </select>
                                    <label for="floatingSelectGrid">Day</label>
                                </div>
                            </div>
                            <div className="col-md">

                                <div className="form-floating ">
                                    <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e)=>{date.push(e.target.value)}}>
                                        <option selected>Select Month</option>
                                        <option value="Jan">January</option>
                                        <option value="Feb">February</option>
                                        <option value="Mar">March</option>
                                        <option value="Apr">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="Aug">August</option>
                                        <option value="Sept">September</option>
                                        <option value="Oct">October</option>
                                        <option value="Nov">November</option>
                                        <option value="Dec">December</option>
                                    </select>
                                    <label for="floatingSelectGrid">Month</label>
                                </div>

                            </div>
            
                            <div className="col-md ">
                                <div className="form-floating ">
                                    <select className="form-select nice-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e)=>{date.push(e.target.value);setDetail({...detail,dob:`${date[0]}-${date[1]}-${date[2]}`})}}>
                                        <option selected>Select Year</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
        
                                    </select>
                                    <label for="floatingSelectGrid">Year</label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={Styles.nextBtnDiv}> <Link to="/signup/accept"> <button disabled={dis} style={{background:dis?"rgb(94, 91, 91)":"black"}} className={Styles.nextbtn} onClick={()=>{
                        
                        let username = `${detail.name.substr(0,4)}${detail.phone.substr(3,4)}`;
                        const getData = async() =>{
                            const data = await db.collection("users").get()
                            data.forEach(doc => {
                                if(doc.id === username)
                                {
                                    alert("User have the Account")
                                    navigate("/")
                                }
                            });
                        }
                        getData()
                        
                        if(detail.name < 4 || detail.phone < 10)
                        {
                            alert("Name must be of Character and Phone number must be of 10")
                            navigate("/signup")
                        }
                        else
                        {
                            localStorage.setItem("Details",JSON.stringify(detail))
                            localStorage.setItem("username",JSON.stringify(username))
                        }
                        dispatch(user_details(detail))}}>{dis?"Fill all":"Next"}</button></Link> </div>
                    </form>
            </div>
        </>
    )
}
