import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  photo: String,
  creditBalance: { type: Number, default: 5 },
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;