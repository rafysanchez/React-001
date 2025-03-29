import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Mock login success
      const mockUserData = {
        token: 'fake-token-123',
        user: {
          name: formData.username, // Make sure username is being passed
          id: 1
        }
      };

      onLogin(mockUserData);
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <h1 className="text-center mb-4">Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Nome de Usuário</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Digite seu nome de usuário"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;