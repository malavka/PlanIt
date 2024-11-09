import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">EVENTS</a>
            </div>
            <div className="navbar-center">
                <h1>PLANIT EVENTS & SERVICES</h1>
            </div>
            <div className="navbar-right">
                <a href="#">TESTIMONIAL</a>
                <a href="#">GALLERY</a>
                <a href="#">CONTACT</a>
                <div className="menu-icon">≡</div>
            </div>
        </nav>
    );
};

export default Navbar;

