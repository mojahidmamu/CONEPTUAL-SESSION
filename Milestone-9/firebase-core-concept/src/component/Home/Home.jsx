import { useContext } from "react";
import { authContext } from "../Main/Main";

const Home = () => {
  const authContextValue = useContext(authContext);
  console.log(authContextValue);

  const { handleGithubLogin, handleGoogleLogin, handleMicrosoftLogin } =
    authContextValue;

  return (
    <div>
      <h1>This is home</h1>
      <button onClick={handleGoogleLogin} className="btn">
        Google Login
      </button>
      <button onClick={handleGithubLogin} className="btn">
        Github Login
      </button>
      <button onClick={handleMicrosoftLogin} className="btn">
        Github Login
      </button>
    </div>
  );
};

export default Home;
