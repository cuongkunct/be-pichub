import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    fileName: String,
    url: String,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Image", imageSchema);
