import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import auth from "../Firebase/firebase.config";

const Home = () => {
    const googleProvider = new GoogleAuthProvider();  

    const handleGoogleLogin = () => {   
        signInWithPopup(auth, googleProvider)  
            .then(result => console.log(result))
            .catch(error => console.error(error));  
    }

    return (
        <div>
            <h1>This is home</h1>
            <button onClick={handleGoogleLogin} className="btn">Google Login</button>
        </div>
    );
    
};

export default Home;
