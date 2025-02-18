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

  const handleSelectedProduct = (product) => {
    console.log(product);
  };

  // console.log(isActive);

  return (
    <>
      <Navbar />

      <div className="flex justify-around">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CardContainer
          isActive={isActive}
          handelIsActive={handelIsActive}
        ></CardContainer>
      </div>
    </>
  );
}

export default App;
