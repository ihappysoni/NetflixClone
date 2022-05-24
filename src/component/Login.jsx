import React from "react";
import About from "./About";
import FAQ from "./FAQ";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <>
        <Navigation />
        <GetStarted />
        <About />
        <FAQ />
        <Footer /> 
    </>
  ); 
};

export default Login;
