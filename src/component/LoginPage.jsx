import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const LoginPage = () => {
  const [show, setShow] = useState("password");
  return (
    <div className="full">
      <div className="logoLogin">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          width={"200px"}
        />
      </div>
      <div className="loginCred">
        <h2>Sign In</h2>
        <div>
          <input
            type="text"
            name="emailtel"
            id="emailtel"
            placeholder="Enter Email or Password"
          />
        </div>
        <div>
          <input
            type={show ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <i
          class="far fa-eye"
          id="togglePassword"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          {" "}
        </i>
        <div>
          <button className="signin">Sign In</button>
        </div>
        <div id="down">
          <div id="rmdiv">
            <input type="checkbox" name="RememberMe" id="rm" />
            <label htmlFor="rm">Remember Me</label>
          </div>
          <div>Need Help?</div>
        </div>
        <div>
          New to <a href="https://www.netflix.com">Netflix</a> ? Sign up now.
        </div>
        <div id="bot">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
