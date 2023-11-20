import mongoose from "mongoose";
import Quiz from "./Quiz.js";

const adminSchema = mongoose.Schema({
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
  createdQuizes: {
    type: Array,
    of: mongoose.Schema.ObjectId
  },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
