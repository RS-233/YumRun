import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { message } from "antd"

const Login = ({setShowLogin}) => {


    const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) => {
        event.preventDefault()
         let newUrl = "http://localhost:4000";
         if(currState === "Login") {
             newUrl += `/api/user/login`
         }
         else {
             newUrl += `/api/user/register`
         }

        const response = await axios.post(newUrl,data);

        if (response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
            message.success(response.data.message)
        }
        else{
            message.error(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" name='name' onChange={onChangehandler} value={data.name} placeholder='Your name' required/>}
                    
                    <input type="email" name='email' onChange={onChangehandler} value={data.email} placeholder='Your email' required />
                    <input type="Password" name='password' onChange={onChangehandler} value={data.password} placeholder='Password' required />
                </div>
                <button type='submit'>{currState==="sing Up"?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState==="Login"?
                <p>Create a new account? <span onClick={()=>setCurrState("sign Up")}>Click here</span></p>
                :
                <p>Already have an account? <span onClick={()=>setCurrState("Login")}> Login here</span></p>}
                
                
            </form>
        </div>
    )
}

export default Login
