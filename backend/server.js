// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

import dotenv from "dotenv";

import { connectDatabase } from "./config/database.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

// ?
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server started at: http://localhost:${PORT}/`);
});
