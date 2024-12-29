import React from "react";
import "./Login.css";
import { useState } from "react";
import assets from "../../assets/assets";
import logo_big from "../../assets/logo_big.png";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [current, setCurrent] = useState("Sign Up");
  const [Username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (current == "Sign Up") {
      signup(Username, Email, Password);
      setusername("");
      setEmail("");
      setPassword("");
    } else {
      login(Email, Password);
    }
  };
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo_login" />
      <form className="login_form" onSubmit={onSubmitHandler}>
        <h2>{current}</h2>
        {current == "Sign Up" ? (
          <input
            onChange={(e) => setusername(e.target.value)}
            value={Username}
            type="text"
            placeholder="Username"
            className="Form-input"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          type="email"
          placeholder="E-Mail Address"
          className="Form-input"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
          type="password"
          placeholder="Password"
          className="Form-input"
          required
        />
        <div className="login-term">
          <input type="checkbox" required />
          <p>Agree to the terms & conditions</p>
        </div>
        <button className="button_login" type="submit">
          {current == "Sign Up" ? "Create Account" : "Login Now"}
        </button>

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
