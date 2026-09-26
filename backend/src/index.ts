import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});