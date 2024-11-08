import React, { useState } from 'react';
const DropDown = ({ title, content }) => {
  // Utilisation de useState pour gérer l'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <li className="dropdown">
      <div className="dropdown-title">
        <h2>{title}</h2>
        {/* On change l'icône en fonction de l'état ouvert/fermé */}
        <i onClick={toggleOpen} className={`fa-solid fa-chevron-up ${isOpen ? 'rotated' : ''}`}></i>
      </div>
      {/* On affiche le contenu si isOpen est vrai , et on verifie si content est un tableau*/}
      {isOpen && (
        Array.isArray(content) ? (
          <ul className='dropdown-list'>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className='dropdown-content'>{content}</p>
        )
      )}
    </li>
  );
};

export default DropDown;