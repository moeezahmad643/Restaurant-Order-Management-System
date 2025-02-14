import React from "react";
import "./menuItems.css";

const MenuItems = () => {
  return (
    <section className="card">
      <img
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=pexels-robinstickel-70497.jpg&fm=jpg"
        alt=""
      />
      <div>
        <span>
          <h5>Food Name</h5>
          <small>500Rs</small>
        </span>
        <span className="icon">+</span>
      </div>
    </section>
  );
};

export default MenuItems;
