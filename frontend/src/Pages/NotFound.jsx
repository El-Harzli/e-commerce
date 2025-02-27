import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/NotFound.css';

function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <p>Oops! The page you are looking for does not exist.</p>
                    <Link to="/" className="home-button">Go to Home</Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;
