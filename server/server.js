// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysqljs123", //password of your mysql db
//   database: "react-sql-db",
// });

const fs = require("fs");
const express = require("express");
const app = express();

const ProductRoutes = require("./routes/ProductRoutes");

app.use(express.json());
app.use(express.static("public"));

//root
app.get("/", (req, res) => {
  res.send("hello from express");
});
//locations
app.use("/product", ProductRoutes);

app.listen(5000, () => console.log("Listening on: http://localhost:5000"));
