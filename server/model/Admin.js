import mongoose from "mongoose";
import Quiz from "./Quiz.js";

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    createdQuizes: [
        {
            quiz: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Quiz"
            }
        }
    ]
})

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;