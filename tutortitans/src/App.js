import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentLoginPage } from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
import './styleguide.css'; // Import the style guide at the top of your main file


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/student-login" element={<StudentLoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
