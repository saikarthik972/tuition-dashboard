import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import LoginScreen from './components/Login/Login';
import AddStudent from './components/AddStudent/AddStudent';
import User from './components/User/User'
import StudentDetail from './components/StudentDetails/StudentDeatils'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student/:name" element={<StudentDetail />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/User" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
