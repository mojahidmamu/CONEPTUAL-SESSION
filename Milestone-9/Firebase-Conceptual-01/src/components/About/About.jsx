import { GoogleAuthProvider , signInWithPopup, } from 'firebase/auth';
import React from 'react';
import auth from '../Firebase/firebase.config';

const About = () => {
    const githubProvider = new GoogleAuthProvider();
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => console.log(result))
    }
    return (
        <div>
           I am in about 
           <button onClick={handleGithubLogin} className='btn btn-outline'>Github Login</button>
        </div>
    );
};

export default About;