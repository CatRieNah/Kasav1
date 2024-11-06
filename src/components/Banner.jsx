import React from 'react';

// on utilise props title et urlImage pour le background afin de réutiliser ce composant banner 
const Banner = ({title,urlImage}) => {
    return (
        <div className='banner' style = {{backgroundImage: `url(${urlImage})`}}>
            {/* On utilise une condition si le banner a un titre ou pas, on a deux sorte de façon d'écrire cette condition */}
            {title && <h1>{title}</h1>}
            {/* ou {title ? <h1>{title}</h1> : null} */}
        </div>
    );
};

export default Banner;