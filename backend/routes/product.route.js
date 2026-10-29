// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> product.route.js

// Express router
import express from "express";

// Product controller handlers
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

// Create Express application router
const router = express.Router();

// Retrieve all products
router.get("/", getProducts);

// Create a new product
router.post("/", createProduct);

// Update a product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

// Export product routes
export default router;
