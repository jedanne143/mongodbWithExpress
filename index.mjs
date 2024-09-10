
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import grades  from "./routes/grades.mjs";

const PORT = process.env.PORT || '3000';
const app = express();
app.use(express.json());
app.use("/grades", grades)
app.get("/", (req, res) => {
  res.send("Welcome to the root");
});


//Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("There is an error");
  });
// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
