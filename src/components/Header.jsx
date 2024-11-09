//import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo-header.png'

/*const Header = () => {
   //On utilise useLocation pour gérer l'état des liens au clic
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
};*/

const Header = () => {
    // On utilise UseLocation pour gérer surligner le lien si la page correspond au lien définie dans useLocation
    const location = useLocation()
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                {/*Si la page correspond au lien de la page dans useLocation, on surligne le lien */}
               <Link to='/' className={location.pathname === '/' ? "nav-active" : "null"}>
                    Acceuil
               </Link>
               <Link to='/about' className={location.pathname === '/about' ? "nav-active" : "null"}>
                    A propos
               </Link>
            </nav>
        </header>
    );
};


export default Header;