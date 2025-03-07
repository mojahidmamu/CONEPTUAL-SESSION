import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1>Sing UP</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">First Name</label>
              <input type="text" className="input" placeholder="First Name" />
              <label className="fieldset-label">Last Name</label>
              <input type="text" className="input" placeholder="Last Name" />
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sing UP</button>
            </fieldset>
            <p>
              Already registered ?
              <Link to="login">
                 <button className="btn btn-primary my-3 mx-2">Login </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
