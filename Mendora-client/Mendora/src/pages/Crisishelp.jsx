import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

const CrisisHelp = () => {
  const styles = {
    container: { padding: "30px", backgroundColor: "#fff3f3" },
    button: { backgroundColor: "#dc3545", border: "none", padding: "15px" },
  };

  return (
    <div style={styles.container}>
      <h2>🚨 Crisis Help</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Immediate Help</Card.Title>
          <Card.Text>If you’re in danger or feeling overwhelmed, don’t wait.</Card.Text>
          <Button style={styles.button}>Send Emergency SOS</Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Helplines</Card.Title>
          <ul>
            <li>iCall: +91 9152987821</li>
            <li>AASRA: +91-9820466726</li>
            <li>Vandrevala Foundation: 1860 266 2345</li>
          </ul>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Nearby Help Centers</Card.Title>
          <a
            href="https://www.google.com/maps/search/mental+health+hospital+near+me"
            target="_blank"
            rel="noreferrer"
          >
            🔍 Open Map
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrisisHelp;
