import React from "react";
import "./Login.css";
import assets from "../../assets/assets";
import logo_big from "../../assets/assets";

const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login_form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="Form-input"
          required
        />
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
        <button className="button" type="submit">
          Sign Up
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms & conditions</p>
        </div>
        <div className="login-toggle">
          Already have an account? <span>Click here!</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
