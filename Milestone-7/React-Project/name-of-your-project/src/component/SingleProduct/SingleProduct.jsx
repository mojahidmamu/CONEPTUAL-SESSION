import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
    const {id, image, name, price, category, description,isFeature} = product;
     
  // console.log(product/)
  return (
    <div className="cart border-2 m-3 w-full">
      <h1>Single Product.. .</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default SingleProduct; 
