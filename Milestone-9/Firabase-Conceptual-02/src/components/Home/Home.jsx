import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../MainLayout/MainLayout";

const Home = () => {
  const contextValue = useContext(authContext);
  const { handleGithubLogin, handleGoogleLogin, handleTwitterLogin } =
    contextValue;
  return (
    <div>
      <h1>I am in Home...</h1>
      <button onClick={handleGoogleLogin} className="btn btn-secondary">
        Google Login
      </button>{" "}
      <br />
      <button onClick={handleGithubLogin} className="btn btn-outline my-5">
        Github Login
      </button>{" "}
      <br />
      <button onClick={handleTwitterLogin} className="btn btn-outline my-5">
        Twitter Login
      </button>{" "}
      <br />
      <br />
      <Link to="/about">
        <button className="btn btn-outline">Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
