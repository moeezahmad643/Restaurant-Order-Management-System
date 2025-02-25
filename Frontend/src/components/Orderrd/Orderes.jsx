import React from "react";
import { useParams, Link } from "react-router";
import "./ordered.css";

const Orderes = () => {
  const { "*": tableNo } = useParams(); // Get the value of *
  console.log(tableNo);
  return (
    <div id="ordered">
      <span>
        <h1>Order Placed</h1>
        <Link className="link" to={"/table/" + tableNo}>Order More</Link>
      </span>
    </div>
  );
};

export default Orderes;
