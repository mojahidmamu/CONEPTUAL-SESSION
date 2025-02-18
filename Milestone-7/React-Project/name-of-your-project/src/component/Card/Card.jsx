import React from 'react';

const Card = ({selectedProducts}) => {
  // console.log(selectedProducts)
    return (
        <div> 
          {
            selectedProducts.map( (product) => (
              <div>
                <div className='flex justify-around'>
                  <img className='w-24 h-24' src={product.image} alt="" />
                  <h1 className='text-lg font-bold'>{product.name} </h1>
                  <p>$ {product.price} </p>
                </div>
              </div>
            )) 
          }
        </div>
    );
};

export default Card;<h1>this is card.jsx</h1>