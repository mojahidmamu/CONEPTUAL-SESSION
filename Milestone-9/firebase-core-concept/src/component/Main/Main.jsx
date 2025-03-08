import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  OAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const authContext = createContext();

const Main = () => {
  const [user, setUser] = useState(null);

  // Listen for auth state changes (Keeps user logged in after reload)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state with the logged-in user
      console.log("Auth state changed:", currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider("microsoft.com");

  // Google login function
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log("Google Sign-in Successful:", result.user);
      })
      .catch((error) => {
        console.error("Google Sign-in Error:", error.message);
        alert(`Error: ${error.message}`); // Show alert for debugging
      });
  };

  // GitHub login function
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));
  };

  // Microsoft login function
  const handleMicrosoftLogin = () => {
    signInWithPopup(auth, microsoftProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));
  };

  const authData = {
    user, // Provide user data to the context
    handleGithubLogin,
    handleGoogleLogin,
    handleMicrosoftLogin,
  };

  return (
    <div>
      <Navbar />
      <authContext.Provider value={authData}>
        <Outlet />
      </authContext.Provider>
    </div>
  );
};

export default Main;
