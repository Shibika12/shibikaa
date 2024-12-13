import React from "react";
import background from '../assets/images/dr.jpg';  
import "./login.scss";

const Login = () => {
    return (
       
        <div className="img">
            <img className="img" src={background} alt="Background" />
            <div className="container">
                <h1>Welcome to the Login Page</h1>
                <p>Please enter your credentials to log in.</p>
                
                <div className="section">
                <input placeholder="email"type="email"/>
                </div>
            </div>
        </div>
    );
};

export default Login;
