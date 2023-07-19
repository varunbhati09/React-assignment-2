// src/App.js

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NewTicketPage from './components/NewTicketPage';
import LandingPage from './components/LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    // You can add your authentication logic here.
    // For this example, we'll just assume the login is successful if the username is "admin" and password is "password".
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/landing">Landing Page</Link>
            </li>
            <li>
              <Link to="/new-ticket">New Ticket</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage username={username} onLogout={handleLogout} /> : <Navigate to="/" />}
          />
          <Route path="/new-ticket" element={isLoggedIn ? <NewTicketPage onLogout={handleLogout} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
