import React from "react"
import Styles from "./create.module.css"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useNavigate } from "react-router-dom"
import {db} from "../../Configs/firebase";

export const CreatePass = () =>{

    const navigate = useNavigate()
    let username = JSON.parse(localStorage.getItem("username"))

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const onSignup = async() => {

        if(values.password.length < 8)
        {
          alert("Password must consist 8 Characters")
        }
        else
        {
          localStorage.setItem("Details",JSON.stringify(""))
          db.collection("users").doc(username).update({password:values.password})
          navigate("/home") // HOMEPAGE LINK
        }

      }    
    return <div className={Styles.mainDiv}>
        <svg className={Styles.twitterLogo} viewBox="0 0 24 24" aria-hidden="true" fill="#1d9bf0" ><g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737
             4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352
              3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093
               7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477
                2.323-2.41z"></path>
        </g></svg >

        <div className={Styles.password}> <h3>You'll need a Password</h3> </div>
        <p className={Styles.more}>Make sure it's 8 Characters or more.</p>
        <FormControl sx={{ m: 2, width: '70%',bgcolor: 'transparent',color:"red"}} variant="filled" size="small" className={Styles.materialInput}>
          <InputLabel className={Styles.label} htmlFor="filled-adornment-password" sx={{color:"#39a3e9;"}}>Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className={Styles.nextBtnDiv}><button className={Styles.nextbtn} onClick={()=>{onSignup()}}>Sign up</button></div>
    </div>
}