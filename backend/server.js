// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

import dotenv from "dotenv";

import { connectDatabase } from "./config/database.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

// app.get("/", (_, res) => {
//   res.send("Server is ready!");
// });

// ?
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(`Getting All Product Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error." });
  }
});

// ?
app.post("/api/products", async (req, res) => {
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

// ?
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    console.log(`Deleting Product Error: ${error.message}`);
    res.status(404).json({ success: false, message: "Product not found." });
  }
});

// ?
app.listen(5000, () => {
  connectDatabase();
  console.log("Server started at: http://localhost:5000/");
});
