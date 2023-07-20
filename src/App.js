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
    // For this example, we'll just assume the login is successful for any username and password.
    setIsLoggedIn(true);
    setUsername(username);
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
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/landing">Landing Page</Link>
                </li>
                <li>
                  <Link to="/new-ticket">New Ticket</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/landing" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage username={username} /> : <Navigate to="/" />}
          />
          <Route
            path="/new-ticket"
            element={isLoggedIn ? <NewTicketPage onLogout={handleLogout} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
