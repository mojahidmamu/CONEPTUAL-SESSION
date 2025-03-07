import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const authContext = createContext();

const Main = () => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider("microsoft.com");
  // Function-1
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
    //   .catch((error) => console.error(error));
  };
  // Function -02
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) => console.log(result));
    //   .catch((error) => console.error(error));
  };
  //   Function -03
  const handleMicrosoftLogin = () => {
    signInWithPopup(auth, microsoftProvider).then((result) => console.log(result));
    //   .catch((error) => console.error(error));
  };

  const authData = {
    handleGithubLogin,
    handleGoogleLogin,
    handleMicrosoftLogin,
  };
  return (
    <div>
      <Navbar></Navbar>
      <authContext.Provider value={authData}>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default Main;
