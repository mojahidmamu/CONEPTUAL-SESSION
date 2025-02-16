import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";
import About from "../About/About";

const CardContainer = ({ handelIsActive, isActive }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold"> CardContainer</h1>
      <div className="flex justify-around">
        <div
          onClick={() => handelIsActive("cart")}
          className={`${isActive.card ? "btn active" : "btn"}`}
        >
          Cart
        </div>
        <div
          onClick={() => handelIsActive("about")}
          className={`${isActive.card ? "btn" : "btn active"}`}
        >
          About
        </div>
      </div>

      

      {isActive.card ? <Card></Card> : <About></About>}
    </div>
  );
};

export default CardContainer;
