import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MoodDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <h2 className="mb-4">🧠 Your Mental Health Dashboard</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="p-4 shadow">
            <h4>📊 View Mood Graph</h4>
            <Button onClick={() => navigate('/mood-graph')} className="mt-2">Open Graph</Button>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="p-4 shadow">
            <h4>📅 Check Calendar</h4>
            <Button onClick={() => navigate('/mood-calendar')} className="mt-2">Open Calendar</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoodDashboard;
