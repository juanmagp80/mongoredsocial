const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mi_redsocial", {});

    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
module.exports = connection;
