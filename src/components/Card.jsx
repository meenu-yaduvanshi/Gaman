import React from 'react';
import '../style/Card.css';

const Card = ({slide}) => {
    return (
        <div className="card-container">
            <div className='card'> 
                <div className="left">
                    <img src={slide.image} alt="Placeholder" />
                </div>
                <div className="right">
                    <h1>{slide.heading}</h1>
                    <p>{slide.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;