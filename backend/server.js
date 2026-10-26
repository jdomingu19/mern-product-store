// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

import express from "express";

import dotenv from "dotenv";

import path from "path";

import { connectDatabase } from "./config/database.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// ?
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server started at: http://localhost:${PORT}/`);
});
