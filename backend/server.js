// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Server is ready!");
});

app.listen(5000, () => {
  console.log("Server started at: http://localhost:5000/");
});
