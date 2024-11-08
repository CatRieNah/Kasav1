import React from "react";
import { Link } from "react-router-dom";

const Card = ({cardTitle,cardImage,id}) => {
    
    return (
        <Link to={`/logement/${id}`}>
            <li className='card'>
                <img src={cardImage} alt={cardTitle}/>
                <h2>{cardTitle}</h2>
            </li>
        </Link>
    );
};

export default Card;