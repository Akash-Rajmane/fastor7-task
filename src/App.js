import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Otp from './pages/Otp';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

function App() {
  const [info,setInfo] = useState(null);
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp/>} />
        <Route path='/home' element={<Home info={info} setInfo={setInfo}/>}/>
        <Route path="/restaurant/:id" element={<Restaurant info={info}/>}/>
      </Routes>
    </div>
  );
}

export default App;
