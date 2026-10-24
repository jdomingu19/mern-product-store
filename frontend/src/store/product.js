// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> product.js

import { create } from "zustand";

// ?
export const useProductStore = create((set) => ({
  products: [],
  setProducts: () => (products) => set({ products }),
}));
