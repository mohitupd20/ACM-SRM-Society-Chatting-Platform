import React from "react";
import "./Login.css";
import { useState } from "react";
import assets from "../../assets/assets";
import logo_big from "../../assets/logo_big.png";

const Login = () => {
  const [current, setCurrent] = useState("Sign Up");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo_login" />
      <form className="login_form">
        <h2>{current}</h2>
        {current == "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            className="Form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="E-Mail Address"
          className="Form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="Form-input"
          required
        />
        <button className="button_login" type="submit">
          {current == "Sign Up" ? "Sign Up" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms & conditions</p>
        </div>
        <div className="login-toggle">
          {current == "Sign Up"
            ? "Already have an account? "
            : "Create an Account? "}
          <span
            onClick={() => {
              current == "Sign Up"
                ? setCurrent("Login")
                : setCurrent("Sign Up");
            }}
          >
            Click here!
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
