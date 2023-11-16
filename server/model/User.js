import mongoose from "mongoose";
import Quiz from "./Quiz.js";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  attemptedQuizes: [
    {
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
      score: {
        type: Number,
        default: 0
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
