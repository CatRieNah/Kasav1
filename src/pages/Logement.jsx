import React from 'react';
import Carousel from '../components/Carousel';
import data from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Erreur404 from '../components/Erreur404';
import InfoCard from '../components/InfoCard';
import DropDown from '../components/DropDown'

const Logement = () => {
    // On récupère l'ID de l'URL
    const { id } = useParams();

    // On cherche le logement qui correspond à cet ID
    const logement = data.find(logement => logement.id === id);

    // Si le logement est trouvé, on passe ses images au composant Carousel
    return (
        <>
            {logement ? (
                
                <>
                    <Carousel pictures={logement.pictures} />
                    <InfoCard 
                        title={logement.title}
                        location={logement.location}
                        tags={logement.tags}
                        host={logement.host}
                        rating={logement.rating}
                        
                    />
                    <div className='dropdown-logement'>
                        <DropDown title = "Description" content = {logement.description} className="description"/>
                        <DropDown title = "Equipements" content = {logement.equipments} className = "equipments"/>
                    </div>
                </>
            ) : (
                <Erreur404 />
            )}
        </>
    );
};

export default Logement;