import React, { useState } from 'react'
import cross_icon from "../../../assets/cross_icon.png";



const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up")

    return (
        <div className='login-popup'>

            <form className='login-popup-container'>

                <div className='login-popup-title'>
                    <h2>{currentState}</h2>

                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt='' />


                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Your name' required />}
                    <input type='email' placeholder='Your email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button>{currentState == "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required /><br /><br />
                    <p>By continuing i agree to the terms of use and privacy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup