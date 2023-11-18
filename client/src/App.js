import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import AdminDash from './components/AdminDash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RandomHome from './components/Random/RandomHome';
import CustomHome from './components/CustomQuizz/CustomHome';
import Quizcode from './components/userlogin/Quizcode';
import Instruction from './components/userlogin/Instruction';


function App() {
  return (
    // <AdminDash />
    <Router>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/admin' element={<AdminDash />}></Route>
        <Route path='/random-quiz' element={<RandomHome />}></Route>
        <Route path='/custom-quiz' element={<CustomHome />}></Route>
        <Route path='/code' element={<Quizcode />}></Route>
        <Route path='/instruction' element={<Instruction />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
