import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import {Navbar} from './Components/Navbar';
import Home from './Components/Home';
import Collection from './Components/Collection';
import Community from './Components/Community';
import Explore from './Components/Explore';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "darkmode" : "app"} >
      <BrowserRouter>
        <Navbar
         darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection'element={<Collection />}/>
          <Route path='/community'element={<Community/>}/>
          <Route path='/explore'element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
