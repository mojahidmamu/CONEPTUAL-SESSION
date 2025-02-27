import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>I am in Home...</h1>
      <Link to="/about">
        <button className="btn btn-outline">Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
