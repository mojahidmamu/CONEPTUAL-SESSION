import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // console.log(data.Product)
        setProducts(data.products);
      });
    console.log(products);

    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    //   setError(error.message);
    //   setLoading(false);
    // });
  }, []);

  // if (loading) {
  //   return <p className="text-blue-500">🔄 Loading products...</p>;
  // }

  // if (error) {
  //   return <p className="text-red-500">❌ Error: {error}</p>;
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold">All Products</h1>
      {products.map((p) => (
        <SingleProduct
          handleSelectedProduct={handleSelectedProduct}
          key={p.id}
          product={p}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default AllProducts;
