import React from 'react';
import './CardContainer.css'

const CardContainer = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'> CardContainer</h1>
            <div className='flex justify-around'>
                <div>Cart</div>
                <div>About</div>
            </div>
        </div>
    );
};

export default CardContainer;