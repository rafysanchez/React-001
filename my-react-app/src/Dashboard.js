import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Dashboard;