import React, { useState } from "react";
import "./footer.css"

const Footer = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <footer>
      <h3>Order Items({quantity})</h3>
      <button>CheckOut</button>
    </footer>
  );
};

export default Footer;
