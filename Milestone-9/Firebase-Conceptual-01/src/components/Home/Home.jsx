import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.config";

const Home = () => {
  const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => console.log(result))
    }
  return (
    <div>
      <h1>I am in Home...</h1>
      <button  onClick={handleGoogleLogin} className="btn btn-secondary">Google Login</button> <br />
      
      <Link to="/about">
        <button className="btn btn-outline">Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
