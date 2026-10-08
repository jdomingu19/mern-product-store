// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

import dotenv from "dotenv";

import { connectDatabase } from "./config/database.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

// app.get("/", (_, res) => {
//   res.send("Server is ready!");
// });

app.get("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please, provide all fields." });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`Creating Product Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  connectDatabase();
  console.log("Server started at: http://localhost:5000/");
});
