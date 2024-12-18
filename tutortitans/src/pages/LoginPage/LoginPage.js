import React from "react";
import backButton from "./assets/images/BackButton.png";
import greenRectangleDesign from "./assets/images/greenbox.png";
import logo from "./assets/images/logo.svg";
import "./style.css";
import { Link } from 'react-router-dom';
import GoBackButton from '../../components/GoBackButton.js';



export const StudentLoginPage = () => {
        // Add a function to handle the button click event
        const handleSignIn = () => {
            // Logic for handling sign-in can go here, such as form validation or redirecting
            alert('Sign-in button clicked');
        };
    
    return (
        <div className="student-login-page">
            <div className="div">
                <div className="overlap-group">
                    <img
                        className="green-rectangle"
                        alt="Green rectangle"
                        src={greenRectangleDesign}
                    />

                    <div className="sign-in-box">
                        <div className="div-2">
                            <div className="frame">
                                <div className="text-wrapper">Student Login</div>

                                <div className="frame-2">
                                    <div className="frame-3">
                                        <div className="username-or-email-wrapper">
                                            {/*<div className="username-or-email">JohnDoe@gmail.com</div>*/}
                                            <input class="input" />
                                        </div>

                                        <div className="div-wrapper" >
                                            {/*<div className="text-wrapper-2">********</div>*/}
                                            <input class="input" />

                                        </div>
                                    </div>

                                    <button className="sign-in-button" onClick={handleSignIn}>
                                        <div className="text-wrapper-3">Sign in</div>
                                    </button>
                                </div>
                            </div>

                            <div className="text-wrapper-4">Forgot your password?</div>
                        </div>

                        <div className="frame-wrapper">
                            <div className="frame-4">
                                
                                <div className="rectangle" />

                                <div className="text-wrapper-5">Tutor Login</div>

                                <div className="rectangle" />
                            </div>
                        </div>

                        <div className="div-2">
                            <p className="text-wrapper">No account? Sign up as a:</p>

                            <div className="sign-up-buttons">
                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-6" onClick={handleSignIn}>Student</div>
                                </div>

                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-6">Tutor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-bar">
                    
                    <div className="back-logo">
                        
                        <img className="logo" alt="Logo" src={logo} />
                        
                        <Link to="/">
                        
                        <img className="back-button" alt="Back button" src={backButton} />
                        </Link>
                        <GoBackButton /> {/* Add the Go Back button */}

                    </div>

                    <p className="TUTOR-TITANS">
                        <span className="span">TUTOR</span>

                        <span className="text-wrapper-7">&nbsp;</span>

                        <span className="text-wrapper-8">TITANS</span>
                    </p>
                </div>
            </div>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};
