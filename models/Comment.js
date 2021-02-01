import mongoose from "mongoose";

const CommentSchma = new mongoose.Schema({
  text: {
    type: String,
    required: " Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchma);
export default model;
