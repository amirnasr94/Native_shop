import express from "express";
require("dotenv/config");

const app = express();

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  res.send("موفق شدی!");
});

app.listen(3000, () => {
  console.log("Server is Runing on localhost port 3000");
  console.log("API_URL", api);
});
