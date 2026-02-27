import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

const app = express();

/* MongoDB connection */
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const db = await mongoose.connect(process.env.MONGODB_URL);
  isConnected = db.connections[0].readyState === 1;
  console.log("MongoDB Connected ✅");
};

app.use(cors());
app.use("/api/user", userRouter);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

/* 🔥 LOCAL RUN */
if (process.env.NODE_ENV !== "production") {
  const PORT = 4000;
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server Running on port " + PORT);
    });
  });
}

/* 🔥 VERCEL RUN */
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
