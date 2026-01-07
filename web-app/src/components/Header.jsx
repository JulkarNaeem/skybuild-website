import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/skybuild-logo.png';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-container">
                    <Link to="/#home">
                        <img src={logo} alt="Sky Build Logo" className="logo" />
                    </Link>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/#about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
                        <li><Link to="/#bim" onClick={() => setIsMenuOpen(false)}>BIM Engineering</Link></li>
                        <li><Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="header-cta">
                    <a href="https://wa.me/8801739411586" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Get a Quote
                    </a>
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
