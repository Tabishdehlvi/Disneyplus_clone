import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './Components/Detail';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'>
       <Router>
        <Header />
        <Routes>
           <Route exact path="/detail/:id" element={<Detail />} />
           <Route exact path="/home" element={<Home />} />
           <Route exact path="/" element={<Login />} />
        </Routes>
       </Router>
    </div>
      )
}

export default App;
