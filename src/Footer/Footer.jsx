// src/Footer.js
import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            // Check if the user has scrolled to the bottom
            if (scrollTop + windowHeight >= fullHeight - 10) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <footer className="footer">
                <p>
                    &copy; PlanIt Events & Services, All rights reserved. |
                    <a href="/privacy-policy"> Privacy Policy</a>
                </p>
            </footer>
        )
    );
};

export default Footer;
