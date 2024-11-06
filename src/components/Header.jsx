import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo-header.png'

const Header = () => {
   //On utilise useState pour gérer l'état des liens au clic
   const [activeLink, setActiveLink] = useState(null)
    function handleClick(link){
        setActiveLink(link)
    }
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <Link to='/' onClick={()=>handleClick("home")} className={activeLink === "home" ? "nav-active" : null}>
                    Accueil
                </Link>
                <Link to='/about' onClick={()=>handleClick("about")} className={activeLink === "about" ? "nav-active" : null}>
                    A propos
                </Link>
            </nav>
        </header>
    );
};

export default Header;