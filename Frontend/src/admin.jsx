import React, { useState } from "react";
import "./admin.css";
import axios from "axios";

const Admin = () => {
  const [fname, setFname] = useState("");
  const [fprice, setPrice] = useState("");
  const [img, setImg] = useState("");

  const submit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Food Name:", fname, "Price:", fprice, "Image URL:", img);

    axios
      .post("http://localhost:3000/addFood", {
        fname: fname,
        price: fprice,
        foodImg: img,
      })
      .then((res) => {
        console.log(res.data);
        alert("Food Added Successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add food");
      });


  };

  return (
    <div id="admin">
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
