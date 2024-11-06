import React from 'react';
import Banner from '../components/Banner';
import bannerImage from "../assets/bannerImage/bannerHome.png"
const Home = () => {
    return (
        <>
            <Banner 
                title = "Chez vous, partout et ailleurs"
                urlImage = {bannerImage}
            />
        </>
    );
};

export default Home;