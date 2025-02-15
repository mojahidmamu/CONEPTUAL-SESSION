import React, { useEffect, useState } from 'react';
import './AllProducts.css'

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("../../../public/fakeData.json()")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('error fetching data', error));
    }, [])

    return (
        <div>
             <h1 className='text-3xl font-bold'>All product</h1>
        </div>
    );
};

export default AllProducts;