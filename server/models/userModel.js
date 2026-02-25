import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    creditBalance: { type: Number, default: 5 }
  },
  { timestamps: true }
);

// Prevent model overwrite error in dev
const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;