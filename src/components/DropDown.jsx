import React from 'react';

const DropDown = ({title,content}) => {
    return (
        <li className='dropdown'>
            <div className='dropdown-title'>
                <h2>{title}</h2>
                <i className='fa-solid fa-chevron-up'></i>
            </div>
            <div className='dropdown-content'>
                <p>{content}</p>
            </div>
        </li>
    );
};

export default DropDown;