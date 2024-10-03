import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer">
            <p>All rights reserved © Psychonnect {currentYear}</p>
        </footer>
    );
};

export default Footer;
