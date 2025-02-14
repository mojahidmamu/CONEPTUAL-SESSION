import React from "react";

const app = () => {
  const handleHeroAlom = (message) => {
    console.log(message);
  };
  return (
    <div>
      <h1>this is Variable 0 </h1>
      <h1>this is jsx state 0</h1>

      <button onClick={() => handleHeroAlom("mojahid")}>Just Hero Alom</button>
    </div>
  );
};

export default app;
