import express from 'express';
import { addUser} from '../controller/userController.js';
import { addAdmin } from '../controller/adminController.js';
import { getUser } from '../controller/userController.js';
import { getAdmin } from '../controller/adminController.js';
import { addQuiz, deleteQuiz, getQuizzes } from '../controller/quizController.js';
import { getQuiz } from '../controller/quizController.js';
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hello from route");
})

router.post('/register-user',addUser);
router.post('/register-admin',addAdmin);
router.post('/login-user', getUser);
router.post('/login-admin', getAdmin);
router.post('/add-quiz', addQuiz)
router.get('/get-quiz/:quizId', getQuiz);
router.post('/get-quizzes',getQuizzes);
router.post('/delete-quiz', deleteQuiz);

export default router;