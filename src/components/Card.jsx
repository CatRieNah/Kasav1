import React from 'react';

const Card = ({cardTitle,cardImage}) => {
    return (
        <li className='card'>
            <img src={cardImage} alt={cardTitle}/>
            <h2>{cardTitle}</h2>
        </li>
    );
};

export default Card;