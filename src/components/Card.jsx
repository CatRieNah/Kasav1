import React from 'react';
import { useNavigate } from 'react-router-dom';

// On utilise useNavigate pour la estion de redirection vers la page de logement
const Card = ({ cardTitle, cardImage, id }) => {
    const navigate = useNavigate();

    // Fonction pour naviguer vers la page de logement
    const handleClick = () => {
        navigate(`/logement/${id}`);
    };

    return (
        <li className='card' onClick={handleClick}>
            <img src={cardImage} alt={cardTitle} />
            <h2>{cardTitle}</h2>
        </li>
    );
};

export default Card;