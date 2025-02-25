const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./orders.db", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to the in-memory SQlite database.");
});

const createTableQueryForOrders = `
    CREATE TABLE IT NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fname TEXT,
    quantity INTEGER,
    price INTEGER,
    tPrice INTEGER,
    tableNo INTEGER,
    time INTEGER,
    condition boolean default true
)
`;

// Run the SQL query to create the table
db.serialize(() => {
  db.run(createTableQueryForOrders, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log("Table =>orders<= created successfully");
    }
  });
});

const createTableQueryForFood = `
    CREATE TABLE IF NOT EXISTS food (
    fname TEXT,
    price INTEGER,
    foodImg TEXT
)
`;

// Run the SQL query to create the table
db.serialize(() => {
  db.run(createTableQueryForFood, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log("Table =>Food<= created successfully");
    }
  });
});


module.exports = db;