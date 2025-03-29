import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header({ username = "Usuário", onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Limpa o localStorage
      localStorage.clear();
      // ou especificamente:
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
      
      // Executa a função de logout do App
      if (onLogout) {
        onLogout();
      }

      // Redireciona para login
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <Navbar 
      bg="light" 
      fixed="top" 
      className="shadow-sm"
      style={{ 
        background: 'linear-gradient(to right, #f5e6d3, #f8ede3) !important',
        height: '70px'
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="/logo.png" // Adicione sua imagem de logo aqui
            alt="Logo"
            height="40"
            className="me-2"
            style={{ borderRadius: '5px' }}
          />
          <Navbar.Brand href="#home" style={{ color: '#6d4c41' }}>Sistema Empresarial</Navbar.Brand>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex align-items-center">
            <FaUser className="me-2" style={{ color: '#6d4c41' }} />
            <span style={{ color: '#6d4c41' }}>{username}</span>
          </div>
          <Button 
            variant="outline-primary" 
            size="sm"
            className="d-flex align-items-center"
            style={{ 
              borderColor: '#8d6e63',
              color: '#6d4c41',
              backgroundColor: 'transparent'
            }}
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Sair
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;