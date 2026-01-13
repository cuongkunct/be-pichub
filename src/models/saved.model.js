import mongoose from "mongoose";

const savedSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
    savedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("SavedImage", savedSchema);
