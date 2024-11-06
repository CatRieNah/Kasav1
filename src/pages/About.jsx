import React from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/bannerImage/bannerAbout.png';
import DropDown from '../components/DropDown';

const data = [
    {
        Status: "Closed",
        Size: "Large",
        Content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        Title: "Fiabilité"
    },
    {
        Status: "Closed",
        Size: "Large",
        Content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        Title: "Respect"
    },
    {
        Status: "Closed",
        Size :"Large",
        Content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
        Title: "Service"

    },
    {
        Status: "Closed",
        Size: "Large",
        Content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        Title: "Sécurité"
    }

]
const About = () => {
    return (
        <>
            <Banner  urlImage={bannerImage}/>
            <ul className='dropdown-container'>
                {data.map((data,index)=>(
                    <DropDown 
                        key={index}
                        title={data.Title}
                        content={data.Content}
                    />
                ))}
            </ul>
        </>
    );
};

export default About;