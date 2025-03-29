import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica autenticação ao iniciar
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const handleLogin = (userData) => {
    if (!userData || !userData.token) {
      console.error('Dados de usuário inválidos');
      return;
    }

    // Salva os dados no localStorage
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Atualiza o estado
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Limpa o estado
    setIsAuthenticated(false);
    setUser(null);
    
    // Limpa o localStorage
    localStorage.clear();
  };

  return (
    <Router>
      <div style={{ paddingTop: '70px', paddingBottom: '60px' }}>
        {isAuthenticated && (
          <Header 
            username={user?.name} 
            onLogout={handleLogout}
          />
        )}
        
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated 
                ? <Login onLogin={handleLogin} />
                : <Navigate to="/" replace />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated 
                ? <Dashboard />
                : <Navigate to="/login" replace />
            } 
          />
          {/* Rota para capturar qualquer URL não definida */}
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
