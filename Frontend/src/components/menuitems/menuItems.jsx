import React, { useState } from "react";
import "./menuItems.css";

const MenuItems = ({ handlePopup, fname, fprice, fimage }) => {
  const sendData = () => {
    handlePopup([fname, fprice, fimage]);
  };

  return (
    <section id="menuitem" className="card">
      <img src={fimage} />
      <div>
        <span>
          <h5>{fname}</h5>
          <small>{fprice}Rs</small>
        </span>
        <span className="icon" onClick={sendData}>
          +
        </span>
      </div>
    </section>
  );
};

export default MenuItems;
