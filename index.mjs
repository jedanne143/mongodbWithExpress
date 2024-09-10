
import express from "express";
import dotenv from "dotenv";
import { sampleData } from "./db/conn.mjs";
dotenv.config();

const PORT = process.env.PORT || '3000';
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the root");
});


// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
