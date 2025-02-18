import React from 'react';

const Card = ({selectedProducts}) => {
  // console.log(selectedProducts)
    return (
        <div> 
          {
            selectedProducts.map( (product) => (
              <div>
                <div className='flex justify-between items-center gap-3 mt-2'>
                  <img className='w-24 h-24 rounded-lg' src={product.image} alt="" />
                  <h1 className='text-lg font-bold'>{product.name} </h1>
                  {/* <p>$ {product.price} </p> */}
                  <button className="btn btn-primary btn-outline">Delete</button>
                </div>
              </div>
            )) 
          }
        </div>
    );
};

export default Card;<h1>this is card.jsx</h1>