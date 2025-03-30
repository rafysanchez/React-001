import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './styles/main.css';

function Main() {
  return (
    <Container className="main-container" style={{ marginTop: '90px', padding: '20px' }}>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-primary text-white">
              Vendas Mensais
            </Card.Header>
            <Card.Body>
              <Card.Title>R$ 45.678,00</Card.Title>
              <Card.Text>
                Total de vendas realizadas no mês atual
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-success text-white">
              Clientes Ativos
            </Card.Header>
            <Card.Body>
              <Card.Title>157 clientes</Card.Title>
              <Card.Text>
                Número de clientes ativos no sistema
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-info text-white">
              Produtos em Estoque
            </Card.Header>
            <Card.Body>
              <Card.Title>1.234 itens</Card.Title>
              <Card.Text>
                Quantidade total de produtos disponíveis
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-secondary text-white">
              Atividades Recentes
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Pedido #1234 processado com sucesso</li>
                <li className="mb-2">✓ Novo cliente cadastrado: Empresa ABC</li>
                <li className="mb-2">✓ Atualização de estoque realizada</li>
                <li className="mb-2">✓ Relatório mensal gerado</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-warning text-dark">
              Tarefas Pendentes
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li className="mb-2">⚠ Aprovar novos pedidos (3)</li>
                <li className="mb-2">⚠ Verificar pagamentos</li>
                <li className="mb-2">⚠ Atualizar cadastros</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;