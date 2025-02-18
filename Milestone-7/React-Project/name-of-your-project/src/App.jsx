import { useState } from "react";
import "./App.css";
import AllProducts from "./component/AllProducts/AllProducts";
import CardContainer from "./component/CardContainer/CardContainer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    card: true,
    status: "cart",
  });

  const handelIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        card: true,
        status: "cart",
      });
    } else {
      setIsActive({
        card: false,
        status: "about",
      });
    }
  };

  const [selectedProducts, setSelectedProducts] = useState([]);

  // Handel Increase Price
  const [price, setPrice] = useState(500);
  const handleIncreasePrice = (pr) => {
    setPrice(price + pr);
  };

  const handleDecreasePrice = (pr, id) => {
    const productPrice = selectedProducts.find( (p) => p.id == id);
    setPrice(price + productPrice)
    setPrice((prevPrice) => Math.max(0, prevPrice - pr));
  };

  // Handle Product:

  const handelDelete = (id) => {
    handleDecreasePrice(id);
    const remainingProduct = selectedProducts.filter((p) => p.id !== id);
    setSelectedProducts(remainingProduct);
  };

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p) => p.id == product.id);
    if (isExist) {
      alert(" this is already added");
    } else {
      handleIncreasePrice(product.price);
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };

  // console.log(selectedProducts);
  // console.log(isActive);

  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts}></Navbar>

      <div className="flex justify-around">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CardContainer
          handelDelete={handelDelete}
          selectedProducts={selectedProducts}
          isActive={isActive}
          handelIsActive={handelIsActive}
        ></CardContainer>
      </div>
    </>
  );
}

export default App;
