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
const imageModel =
  mongoose.models.image || mongoose.model("Image", imageSchema);
export default imageModel;
