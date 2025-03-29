import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="shadow-sm"
      style={{
        background: 'linear-gradient(to right, #f5e6d3, #f8ede3)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container className="text-center">
        <p style={{ color: '#6d4c41', margin: 0 }}>
          © {currentYear} Sistema Empresarial. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;