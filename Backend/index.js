import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import db from "./Database/databaseSetup.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.get("/2", (req, res) => {
  res.send("Server is live2");
});

app.get("/allOrders", (req, res) => {
  db.all("SELECT * FROM orders", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    res.send(rows);
  });
});

app.post("/changeCondition", (req, res) => {


  if (req.body.id) {
    db.run(`UPDATE orders SET condition = 'false' WHERE id = '${req.body.id}'`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }
      res.send("Condition Changed Successfully");
      
    });
  } else {
    res.status(400).send("Bad Request");
  }
})


app.post("/addOrder", (req, res) => {
  if (
    req.body.fname &&
    req.body.quantity &&
    req.body.price &&
    req.body.tPrice &&
    req.body.tableNo &&
    req.body.time
  ) {
    console.log(req.body.fname);
    console.log(req.body.quantity);
    console.log(req.body.price);
    console.log(req.body.tPrice);
    console.log(req.body.tableNo);
    console.log(req.body.time);

    db.run(
      `INSERT INTO orders (
              fname,
              quantity,
              price,
              tPrice,
              tableNo,
              time
        ) VALUES (?,?,?,?,?,?)`,
      [
        req.body.fname,
        req.body.quantity,
        req.body.price,
        req.body.tPrice,
        req.body.tableNo,
        req.body.time,
      ],
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error");
        }
        res.send("Order Added Successfully");
      }
    );
  } else {
    res.status(400).send("Bad Request");
  }
});

app.post("/addFood", (req, res) => {
  if (req.body.fname && req.body.price && req.body.foodImg) {
    db.run(
      `INSERT INTO food (fname, price, foodImg) VALUES (?,?,?)`,
      [req.body.fname, req.body.price, req.body.foodImg],
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error");
        }
        res.send("Food Added Successfully");
      }
    );
  } else {
    res.status(400).send("Bad Request");
  }
});

app.get("/getFood", (req, res) => {
  db.all("SELECT * FROM food", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`The Server Is live on http://localhost:${port}`);
});
