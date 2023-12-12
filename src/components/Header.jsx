import React from "react";
import logo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo-png" />
      <h1>Quiz App</h1>
    </header>
  );
};

export default Header;
