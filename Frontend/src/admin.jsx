import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";

// const link = "http://localhost:3000";
const link = "https://restaurant-order-management-system-mu.vercel.app";

const Admin = () => {
  const [fname, setFname] = useState("");
  const [fprice, setPrice] = useState("");
  const [img, setImg] = useState("");

  const [orders, setOrders] = useState([]);

  const ChangeCondition = (id) => {
    axios
      .post(`${link}/changeCondition`, {
        id,
      })
      .then((res) => {
        console.log(res.data);
        reRender();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const submit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Food Name:", fname, "Price:", fprice, "Image URL:", img);

    axios
      .post(`${link}/addFood`, {
        fname: fname,
        price: fprice,
        foodImg: img,
      })
      .then((res) => {
        console.log(res.data);
        setFname("");
        setPrice("");
        setImg("");
        alert("Food Added Successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add food");
      });
  };
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensures two digits

    return `${hours}:${minutes}`;
  };
  useEffect(() => {
    axios.get(`${link}/alllOrders"`).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  const reRender = () => {
    axios.get(`${link}/allOrders"`).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  };

  return (
    <div id="admin">
      <h1>Admin Page</h1>

      <section className="orders">
        {orders.map((order, index) =>
          order.condition == true ? (
            <div key={index} className="card">
              <span>
                <h1>Table {order.tableNo}</h1>
                <button
                  onClick={() => {
                    ChangeCondition(order.id);
                  }}
                >
                  Done
                </button>
              </span>
              <span className="orderDetails">
                <ul>
                  <li>
                    <small>Total Price {order.tPrice}</small>
                  </li>
                  <li>
                    <small>Quantity {order.quantity}</small>
                  </li>
                  <li>
                    <small>Food Name {order.fname}</small>
                  </li>
                  <li>
                    <small>Order Id {order.id}</small>
                  </li>
                  <li>
                    <small>Condition {order.condition}</small>
                  </li>
                  <li>
                    <small>Time {formatTime(order.time)}</small>
                  </li>
                </ul>
              </span>
            </div>
          ) : (
            <></>
          )
        )}
      </section>

      <form onSubmit={submit}>
        <h1>Enter Food</h1>
        <input
          type="text"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          name="food"
          id="fname"
          placeholder="Food Name"
        />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={fprice}
          name="price"
          id="fprice"
          placeholder="Price"
        />
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
          value={img}
          name="img"
          id="fimg"
          placeholder="Img"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
