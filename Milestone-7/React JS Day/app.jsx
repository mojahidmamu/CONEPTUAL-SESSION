import React from "react";

const app = () => {
  const handleHeroAlom = (message) => {
    console.log(message);
  };
  return (
    <div>
      <h1>this is Mojahid...</h1>
      <h1>this is jsx file...</h1>

      <button onClick={() => handleHeroAlom("mojahid")}>Just Hero Alom</button>
    </div>
  );
};

export default app;
