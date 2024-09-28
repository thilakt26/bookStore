import React from 'react';
import Home from './Home';
import Courses from './Courses/Courses';
import Signup from './Component/Signup';
import Contact from './Component/Contact';
import Login from './Component/Login.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
