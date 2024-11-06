// src/components/GoBackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <button onClick={handleGoBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Go Back
        </button>
    );
};

export default GoBackButton;
