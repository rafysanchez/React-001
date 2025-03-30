import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function Dashboard({ username, onLogout }) {
  return (
    <Container>
      <Header username={username} onLogout={onLogout} />
      <Main />
      <Footer />
    </Container>
  );
}

export default Dashboard;