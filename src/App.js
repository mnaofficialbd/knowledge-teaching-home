import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import StudentLogin from './Pages/Login/StudentLogin';
import StudentRegister from './Pages/Login/StudentRegister';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentRegister" element={<StudentRegister />} />
        <Route path="/studentLogin" element={<StudentLogin />} />


        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
