// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

import dotenv from "dotenv";

import { connectDatabase } from "./config/database.js";

dotenv.config();

const app = express();

app.get("/", (_, res) => {
  res.send("Server is ready!");
});

app.listen(5000, () => {
  connectDatabase();
  console.log("Server started at: http://localhost:5000/");
});
