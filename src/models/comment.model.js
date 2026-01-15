import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
    createdAt: { type: Date, default: Date.now },
    content: String,
  },
  { timestamps: true }
);
const commentModel =
  mongoose.models.comment || mongoose.model("Comment", commentSchema);
export default commentModel;
