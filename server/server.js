import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(cors());

/* 🔥 Webhook Route FIRST (raw body required) */
app.use("/api/user", userRouter);

/* 🔥 JSON middleware AFTER webhook */
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});