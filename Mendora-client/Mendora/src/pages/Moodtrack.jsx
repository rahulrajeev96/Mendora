import React, { useState } from "react";
import { Button, Form, Card, Row, Col, Alert } from "react-bootstrap";

const MoodTrack = () => {
  const [moodEmoji, setMoodEmoji] = useState("");
  const [severity, setSeverity] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [date, setDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const emojis = ["😊", "😐", "😔", "😡", "😭"];
  const severityLevels = ["None", "Mild", "Moderate", "Severe"];

  const handleSubmit = () => {
    const moodData = {
      moodEmoji,
      severity,
      sleepHours,
      date,
    };

    // 🔒 You can POST this to your MongoDB backend using fetch or axios
    console.log("Mood Record Submitted:", moodData);
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);

    // Clear form
    setMoodEmoji("");
    setSeverity("");
    setSleepHours("");
    setDate("");
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f4f8fc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>🧘 Mood & Sleep Tracker</h2>

      {showMessage && <Alert variant="success">Record saved successfully!</Alert>}

      <Card style={{ padding: "20px", marginBottom: "20px" }}>
        <h5>Select Your Mood</h5>
        <div style={{ fontSize: "2rem", margin: "10px 0" }}>
          {emojis.map((emo, idx) => (
            <span
              key={idx}
              onClick={() => setMoodEmoji(emo)}
              style={{
                margin: "10px",
                cursor: "pointer",
                border: moodEmoji === emo ? "2px solid #333" : "none",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {emo}
            </span>
          ))}
        </div>
      </Card>

      <Card style={{ padding: "20px", marginBottom: "20px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Mood Severity</Form.Label>
          <Form.Select value={severity} onChange={(e) => setSeverity(e.target.value)}>
            <option value="">-- Select Severity --</option>
            {severityLevels.map((level, idx) => (
              <option key={idx} value={level}>{level}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sleep Hours</Form.Label>
          <Form.Control
            type="number"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
            placeholder="Enter number of hours you slept"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Save Record
        </Button>
      </Card>
    </div>
  );
};

export default MoodTrack;
