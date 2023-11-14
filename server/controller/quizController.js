import Quiz from "../model/Quiz.js";

export const addQuiz = async (req,res) => {
    try{
        
    } catch(error){
        return res.status(422).json({message: "Some error Occured during adding quizz"});
    }
}