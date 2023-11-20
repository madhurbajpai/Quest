import mongoose from "mongoose";
import Admin from "../model/Admin.js";
import Quiz from "../model/Quiz.js";
import User from "../model/User.js";
// import {v4 as uuidv4} from 'uuid';
export const addQuiz = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      description,
      dateCreated,
      startTime,
      endTime,
      duration,
      createdBy,
      attemptedBy,
      questions,
    } = req.body;

    if (
      !name ||
      !dateCreated ||
      !startTime ||
      !endTime ||
      !duration ||
      !createdBy ||
      !questions
    ) {
      return res.status(422).json({ message: "Something is missing" });
    }

    // const quizId = uuidv4();
    const quiz = new Quiz({
      // id: quizId,
      name,
      description,
      dateCreated,
      startTime,
      endTime,
      duration,
      createdBy,
      attemptedBy,
      questions,
    });

    const savedQuiz = await quiz.save();

    if (savedQuiz) {
      const quizId = savedQuiz._id;

      const adminId = savedQuiz.createdBy; // Assuming createdBy is the admin's ID
      const admin = await Admin.findById(adminId);

      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      // Add the new quiz ID to the createdQuizzes array
      console.log(admin);

      admin.createdQuizes.push(quizId);
      // Save the updated admin document
      await admin.save();

      return res
        .status(201)
        .json({
          quiz: savedQuiz,
          quizId: quizId,
          message: "Quiz created successfully",
        });
    }
    return res
      .status(422)
      .json({ message: "Some error occured during adding quiz" });
  } catch (error) {
    console.log(error);
    return res
      .status(422)
      .json({ message: "Some error occured during adding quizz" });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const isValidQuiz = await Quiz.findById(quizId);
    console.log(isValidQuiz);
    if (!isValidQuiz) {
      return res.status(422).json({ message: "Invalid QuizId" });
    }

    const quiz = await Quiz.findById(quizId)
      .populate("createdBy", "name")
      .populate("attemptedBy", "name");

    if (!quiz) {
      return res.status(422).json({ message: "Quiz Not Found" });
    }

    return res.status(201).json({ quiz });
  } catch (error) {
    return res
      .status(422)
      .json({ message: "Some error occured while getting quiz" });
  }
};

export const getQuizzes = async (req, res) => {
  // console.log("inside function...")
  try {
    const { quizIds } = req.body;
    console.log(quizIds);
    if (!quizIds.every((id) => mongoose.Types.ObjectId.isValid(id))) {
      return res.json({ status: 422, message: "Invalid QuizId" });
    }

    const quizzes = await Quiz.find({ _id: { $in: quizIds } })
      .populate("createdBy", "name")
      .populate("attemptedBy", "name");

    if (!quizzes || quizzes.length === 0) {
      return res.json({ status: 422, message: "No quizzes found" });
    }

    return res.status(200).json({ quizzes });
  } catch (error) {
    console.log("Some error occured during getting quiz array", error);
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    const { quizId } = req.body;

    if (!quizId) {
      return res.json({ status: 422, message: "QuizId is missing" });
    }

    console.log(quizId)

    const quiz = await Quiz.findById(quizId);

    console.log(quiz);
    if (!quiz) {
      return res.json({ status: 422, message: "Cannot find Quiz" });
    }
    const response = await Quiz.deleteOne({ _id: quizId });

    if (response.deletedCount === 0) {
      return res.json({ status: 422, message: "Cannot find Quiz" });
    }

    await Admin.updateOne(
      { createdQuizes: quizId },
      { $pull: { createdQuizes: quizId } }
    );

    // Update User's attemptedQuizes array
    await User.updateMany(
      { "attemptedQuizes.quiz": quizId },
      { $pull: { attemptedQuizes: { quiz: quizId } } }
    );

    return res.json({ status: 201, message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ status: 422, message: "Cannot delete Quiz" });
  }
};
