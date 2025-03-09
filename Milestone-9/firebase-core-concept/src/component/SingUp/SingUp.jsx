import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.vealue; 
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1>Sing UP</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit} action="">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder=" Name"
                />
                 
                <label className="fieldset-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sing UP</button>
              </fieldset>
            </form>
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
