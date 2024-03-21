//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
