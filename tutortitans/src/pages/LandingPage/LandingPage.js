import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Tutor Titans</h1>
            <p>Choose an option to get started:</p>
            {/* Add navigation buttons/links to other pages */}
            <Link to="/student-login">
                <button>Go to Student Login</button>
            </Link>
        </div>
    );
};

export default HomePage;
