import React from "react";
import { useState } from "react";
import "./login.css"

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }


    return (
        <div className="cover">
            <h1>Login</h1>
            <input type ="text" placeholder="Username" />
            <input type="Password" placeholder ="Password" />

            <div className="Login-btn" onClick={popup}>Login</div>

            <p className ="text">Or Login using</p>

            <div className ="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>    

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or Password incorrect</p>
                </div>


        </div>
    )
}

export default Login