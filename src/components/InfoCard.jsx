import React from 'react';

const InfoCard = ({ title, location, tags, host,rating }) => {

    return (
        <div className="info-card">
            <div className='info-part-1'>
                <h1>{title}</h1>
                <p>{location}</p>
                <ul>
                    {tags.map((tag, id) => (
                        <li key={id}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="info-part-2">
                <div className='host'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name} />
                </div>
                <div className="stars">
                    <i className={`fa-solid fa-star ${rating >= 1 && 'red-star'}`}></i>
                    <i className={`fa-solid fa-star ${rating >= 2 && 'red-star'}`}></i>
                    <i className={`fa-solid fa-star ${rating >= 3 && 'red-star'}`}></i>
                    <i className={`fa-solid fa-star ${rating >= 4 && 'red-star'}`}></i>
                    <i className={`fa-solid fa-star ${rating >= 5 && 'red-star'}`}></i>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;