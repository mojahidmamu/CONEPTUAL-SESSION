// import { GoogleAuthProvider , signInWithPopup, } from 'firebase/auth';
import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
// import auth from '../Firebase/firebase.config';

const About = () => {
    const { handleGoogleLogin } = useContext(authContext)
    // const githubProvider = new GoogleAuthProvider();
    // const handleGithubLogin = () => {
    //     signInWithPopup(auth, githubProvider)
    //     .then(result => console.log(result))
    // }
    return (
        <div>
           I am in about  <br />
           <button onClick={handleGoogleLogin  } className='btn btn-outline my-5 mx-5'>Google Login</button>
        </div>
    );
};

export default About;