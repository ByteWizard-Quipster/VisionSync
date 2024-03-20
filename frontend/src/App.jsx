//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login.jsx'
import Signup from './pages/signup/signup.jsx'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    
      <div>
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

          </Routes>
        </BrowserRouter>
       </div>
  
  )
}

export default App
