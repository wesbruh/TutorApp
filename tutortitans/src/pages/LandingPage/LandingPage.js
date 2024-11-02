import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Tutor Titans</h1>
            <p>Choose an option to get started:</p>
            {/* Add navigation buttons/links to other pages */}
            <button className="button">Sign In</button>
            <Link to="/student-login">
                <button className="button">Go to Student Login</button>
            </Link>
        </div>
    );
};

export default HomePage;
