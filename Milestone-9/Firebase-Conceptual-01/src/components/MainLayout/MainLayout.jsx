import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
export const authContext = createContext();

const MainLayout = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterprovider = new TwitterAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) => console.log(result));
  };
  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterprovider).then((result) => console.log(result));
  };


  const authData = {
   handleGithubLogin,
   handleGoogleLogin, 
   handleTwitterLogin,
  }
  return (
    <div>
      <authContext.Provider value={authData}>  
        <Outlet></Outlet> 
      </authContext.Provider>
    </div>
  );
};

export default MainLayout;
