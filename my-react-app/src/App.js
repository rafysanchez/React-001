import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Header from './Header';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData.user));
    setUser(userData.user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Default route redirects to login if not authenticated */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        
        {/* Login route */}
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />

        {/* Protected dashboard route */}
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <>
                <Header username={user?.name} onLogout={handleLogout} />
                <Dashboard />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
