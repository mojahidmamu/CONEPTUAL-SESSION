import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.config";

const Home = () => {
  const twitterprovider = new TwitterAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) => console.log(result));
  };
  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterprovider).then((result) => console.log(result));
  };
  return (
    <div>
      <h1>I am in Home...</h1>
      <button onClick={handleGoogleLogin} className="btn btn-secondary">
        Google Login
      </button>{" "}
      <br />
      <button onClick={handleGithubLogin} className="btn btn-outline my-5">
        Github Login
      </button> <br />
      <button onClick={handleTwitterLogin} className="btn btn-outline my-5">
        Twitter Login
      </button> <br />
      <br />
      <Link to="/about">
        <button className="btn btn-outline">Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
