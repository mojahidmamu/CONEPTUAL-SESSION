import { useContext } from "react";
import { authContext } from "../Main/Main";

const About = () => {
  const authContextValue = useContext(authContext);
  console.log("this is authContext", authContextValue);

  const { handleGithubLogin } = useContext(authContext);

  return (
    <div>
      <h1>This is about.. </h1>
      <button onClick={handleGithubLogin} className="btn">
        Google Login
      </button>
    </div>
  );
};

export default About;
