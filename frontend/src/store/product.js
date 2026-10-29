// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> product.js

// Zustand state management library
import { create } from "zustand";

/** /
 * Global product store
 */
export const useProductStore = create((set) => ({
  // Product collection
  products: [],
  // Updates product state
  setProducts: () => (products) => set({ products }),
  // Creates a new product
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return {
        success: false,
        message: "Please, fill in all fields.",
      };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    set((state) => ({
      products: [...state.products, data.data],
    }));

    return {
      success: true,
      message: "Product Created Successfully.",
    };
  },
  // Retrieves all products
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
  // Removes a product
  deleteProduct: async (productID) => {
    const res = await fetch(`/api/products/${productID}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      return {
        success: false,
        message: data.message,
      };
    }

    set((state) => ({
      products: state.products.filter((product) => product._id !== productID),
    }));

    return {
      success: true,
      message: data.message,
    };
  },
  // Updates a product
  updateProduct: async (productID, updatedProduct) => {
    const res = await fetch(`/api/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();

    if (!data.success) {
      return {
        success: false,
        message: data.message,
      };
    }

    set((state) => ({
      products: state.products.map((product) =>
        product._id === productID ? data.data : product,
      ),
    }));

    return {
      success: true,
      message: data.message,
    };
  },
}));
