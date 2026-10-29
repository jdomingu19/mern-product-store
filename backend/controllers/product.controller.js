// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> product.controller.js

// Product data model
import Product from "../models/product.model.js";

import mongoose from "mongoose";

/**
 * Retrieves all products.
 */
export const getProducts = async (_, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(`Getting All Product Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

/**
 * Creates a new product.
 */
export const createProduct = async (req, res) => {
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
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

/**
 * Updates an existing product.
 */
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id." });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log(`Updating Product Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

/**
 * Deletes a product by ID.
 */
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product ID." });
  }

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    console.log(`Deleting Product Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};
