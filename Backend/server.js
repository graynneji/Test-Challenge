const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("Database connected succesfully"))
  .catch((err) => console.log(err));
