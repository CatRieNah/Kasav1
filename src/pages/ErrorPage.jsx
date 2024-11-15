import React, { useEffect } from 'react';
import Erreur404 from '../components/Erreur404';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        // Redirection vers la page /404 lorsque l'utilisateur arrive sur une page inconnue
        navigate('/404');
    }, [navigate]);

    return <Erreur404 />;
};

export default ErrorPage;