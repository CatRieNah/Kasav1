import React from 'react';
import { Link } from 'react-router-dom';

const Erreur404 = () => {
    return (
        <div className='errorMessage'>
            <p className='error404'>404</p>
            <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Erreur404;