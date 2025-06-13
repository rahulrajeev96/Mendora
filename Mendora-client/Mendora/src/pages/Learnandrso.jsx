import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

const LearnAndResources = () => {
  return (
    <div style={{ padding: "30px", backgroundColor: "#f0f8ff" }}>
      <h2>📚 Learn & Resources</h2>
      <Row className="mb-3">
        <Col>
          <Badge bg="info" pill>Depression</Badge>
        </Col>
        <Col>
          <Badge bg="success" pill>Mindfulness</Badge>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Understanding Anxiety</Card.Title>
              <Card.Text>Learn how to manage anxious thoughts...</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ZToicYcHIOU"
            title="Mindfulness meditation"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default LearnAndResources;
