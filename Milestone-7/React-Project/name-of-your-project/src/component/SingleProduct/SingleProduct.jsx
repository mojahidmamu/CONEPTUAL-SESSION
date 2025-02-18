import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { id, image, name, price, category, description, isFeature } = product;

  // console.log(product/)
  return (
    <div className="cart  p-2">
      {/* <h1>Single Product.. .</h1> */}
      <img className="img" src={image} alt="" />
      <h2 className="text-3xl my-3 font-bold">{name} </h2>
      <p>{description} </p>
      <div className="flex gap-3 justify-between my-4">
        <p className="font-bold">Price: $ {price}</p>
        <p>{isFeature ? 'Feature Category' : 'NOT Category'} </p>
      </div>
      <button className="btn btn-outline text-green-800">Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
