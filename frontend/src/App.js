import React from 'react';
import './App.css';
import './Styles/app.css'
import './Styles/Login.css';
import './Styles/NavBar.css';
import './Styles/Signup.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { SignupPage } from './Pages/SignupPage';
import { NavBar } from './Pages/NavBar';

function App() {
  return (
    <BrowserRouter>
      {/* //   <UserProvider> */}
      <NavBar />
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {/* //   </UserProvider> */}

    </BrowserRouter>
  );
}

export default App;
