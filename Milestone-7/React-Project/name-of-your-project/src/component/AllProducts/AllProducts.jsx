import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]); // Ensure it's always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setProducts(Array.isArray(data) ? data : data.products || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-blue-500">🔄 Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">❌ Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">All Products</h1>
      {
        products.map((p)=><SingleProduct product={p}></SingleProduct>)
      }
      {/* {products.length > 0 ? (
        products.map((p) => (
          <SingleProduct key={p.id} product={p}></SingleProduct>
        ))
      ) : (
        <p className="text-gray-500">No products found.</p>
      )} */}
    </div>
  );
};

export default AllProducts;
