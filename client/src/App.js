import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import AdminDash from './components/AdminDash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RandomHome from './components/Random/RandomHome';
import CustomHome from './components/CustomQuizz/CustomHome';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Quizcode from './components/userlogin/Quizcode';
import QuizContextProvider from './components/CustomQuizz/context/QuizContextProvider';
import LoginContextProvider from './components/CustomQuizz/context/LoginContextProvider';
import AdminQuizDetail from './components/AdminQuizDetail';


function App() {
  return (
    // <AdminDash />
    <LoginContextProvider>
    <Router>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<AdminDash />}></Route>
        <Route path='/random-quiz' element={<RandomHome />}></Route>
        <Route path='/custom-quiz' element={<QuizContextProvider><CustomHome /></QuizContextProvider>}></Route>
        <Route path='/code' element={<Quizcode />}></Route>
        <Route path='/detail-quiz' element={<AdminQuizDetail />}></Route>
      </Routes>
    </Router>
    </LoginContextProvider>
  );
}

export default App;
