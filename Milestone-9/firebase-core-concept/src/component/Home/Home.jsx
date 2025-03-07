import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <Link to="/about">
        <button className="btn btn-outline"> Go about</button>
      </Link>
    </div>
  );
};

export default Home;
