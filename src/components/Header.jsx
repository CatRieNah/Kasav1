import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo-header.png'
const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about' >A propos</Link>
            </nav>
        </header>
    );
};

export default Header;