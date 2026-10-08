// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> database.js

import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const mongoDBConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB Connected Successfully: ${mongoDBConnection.connection.host}`,
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
