// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> product.model.js

// MongoDB ODM library
import mongoose from "mongoose";

// Product schema definition
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

// Product model
const Product = mongoose.model("Product", productSchema);

// Export product model
export default Product;
