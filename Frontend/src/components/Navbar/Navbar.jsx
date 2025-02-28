import React from "react";
import "./navbar.css";
import image from "./logo.png";

const Navbar = () => {
  return (
    <nav>

      <img src={image} alt="" />
      <h1>Future Cafe</h1>
      
    </nav>
  );
};

export default Navbar;
