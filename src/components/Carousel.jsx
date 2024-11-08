import React, { useState } from 'react';

const Carousel = ({pictures}) => {
    // On utilise useState pour créer la variable d'état de l'index actuel
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPicture = () => {
        //On affiche l'image suivante si l'index de l'image actuelle est inférieure à l'index de la dernière image si non on revient à la première image
        if(currentIndex < pictures.length - 1){
            setCurrentIndex(currentIndex + 1)
        }else{
            setCurrentIndex(0)
        }
    }

    const previousPicture = () => {
        //On affiche l'image précédente si l'index de l'image actuelle est supérieure > 0 sinon on affiche la dernière image
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(pictures.length - 1)
        }
    }
    
    return (
        <div className='carousel'>
            {/* on affiche l'image actuelle */}
            <img src={pictures[currentIndex]} alt="Logement" />
            {/* On affiche les flèches et le compteur seulement si le nombre d'images est supérieur à 1 */}
            {pictures.length > 1 && (
                <span>
                    <i className='fa-solid fa-chevron-left' onClick={previousPicture}></i>
                    <i className='fa-solid fa-chevron-right' onClick={nextPicture}></i>
                </span>
            )}
            {pictures.length > 1 && (
                <p>{currentIndex + 1}/{pictures.length}</p>
            )}
        </div>
    );
};

export default Carousel;