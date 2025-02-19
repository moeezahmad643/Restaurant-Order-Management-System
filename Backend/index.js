import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import db from "./Database/databaseSetup.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  db.all("SELECT * FROM orders", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    res.send(rows);
  });
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


})


app.listen(port, () => {
  console.log(`The Server Is live on http://localhost:${port}`);
});
