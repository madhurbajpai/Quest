import Quiz from "../model/Quiz.js";
// import {v4 as uuidv4} from 'uuid';
export const addQuiz = async (req,res) => {
    try{
        const {name, description, dateCreated, startTime, endTime, duration, createdBy, attemptedBy, questions} = req.body;

        if(!name || !dateCreated || ! startTime || !endTime || !duration || !createdBy || !questions){
            return res.status(422).json({message: "Something is missing"});
        }

        // const quizId = uuidv4();
        // console.log(quizId);
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
            questions
        });

        const savedQuiz = await quiz.save();

        if(savedQuiz){
            const quizId = savedQuiz._id;
            return res.status(201).json({quiz: savedQuiz, quizId: quizId, message: "Quiz created successfully"});
        }
        return res.status(422).json({message: "Some error occured during adding quiz"});

    } catch(error){
        console.log(error);
        return res.status(422).json({message: "Some error occured during adding quizz"});
    }
}

export const getQuiz = async (req,res) => {
    try{
        const quizId = req.params.quizId;
        const isValidQuiz = await Quiz.findById(quizId);
        console.log(isValidQuiz)
        if(!isValidQuiz){
            return res.status(422).json({message: "Invalid QuizId"});
        }

        const quiz = await Quiz.findById(quizId).populate('createdBy', 'name').populate('attemptedBy','name');

        if(!quiz){
            return res.status(422).json({message: "Quiz Not Found"});
        }

        return res.status(201).json({quiz});
    }catch(error){
        return res.status(422).json({message: "Some error occured while getting quiz"});
    }
}