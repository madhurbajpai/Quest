import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import AdminDash from './components/AdminDash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RandomHome from './components/Random/RandomHome';
import CustomHome from './components/CustomQuizz/CustomHome';

function App() {
  return (
    // <AdminDash />
    <Router>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/admin' element={<AdminDash />}></Route>
        <Route path='/random-quiz' element={<RandomHome />}></Route>
        <Route path='/custom-quiz' element={<CustomHome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
