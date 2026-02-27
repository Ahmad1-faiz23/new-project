import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

const app = express();

/* -------- MongoDB Connection (Serverless Safe) -------- */

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Error ❌", error.message);
    throw error;
  }
};

/* -------- Middlewares -------- */

app.use(cors());

/* Webhook FIRST */
app.use("/api/user", userRouter);

/* JSON AFTER webhook */
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

/* -------- EXPORT FOR VERCEL -------- */

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
