import React from 'react';
import Banner from '../components/Banner';
import bannerImage from "../assets/bannerImage/bannerHome.png"
import Card from '../components/Card';
import data from '../data/logements.json'

const Home = () => {
    return (
        <>
            <Banner 
                title = "Chez vous, partout et ailleurs"
                urlImage = {bannerImage}
            />
            <ul className="card-container">
                {/* On utilise map() pour parcourir le tableau de data et récupérer  les valeurs de id, title et  cover */}
                {data.map((data,id)=>(
                    <Card 
                        key = {data.id}
                        id = {data.id}
                        cardTitle={data.title}
                        cardImage={data.cover}
                    />
                ))}
            </ul>
        </>
    );
};

export default Home;