import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = () => {
  const [currState, setCurrState] = useState("Login");
  const [showLogin, setShowLogin] = useState(true);

  return (
    showLogin && (
      <div className='login-popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
          </div>
          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' required/>}
            <input type=" email" placeholder='Your email' required />
            <input type="password" placeholder='password' required />
          </div>
           <button>{currState==="sign up" ? "Create account" : "Login"}</button>
           <div className="login-popup-condition">
            <input type="checkbox"required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
           </div>
           {currState==="login"
           ?<p>Create a new account? <span onClick={()=>setCurrState("sign Up")}>click here</span> </p>
           :<p>Already have an account?<span onClick={()=>setCurrState("login")}>Login here</span></p>
           }
        </form>
      </div>
    )
  );
}

export default LoginPopup;
