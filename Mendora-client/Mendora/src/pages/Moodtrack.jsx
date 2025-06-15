import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const MoodTrack = () => {
  const [mood, setMood] = useState('');
  const [sleepHours, setSleepHours] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const moodData = {
      mood,
      sleepHours,
      notes,
      date: new Date().toISOString().split('T')[0],
    };
    await axios.post('/api/mood/track', moodData); // Backend endpoint
    alert('Mood logged successfully!');
    setMood('');
    setSleepHours('');
    setNotes('');
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h2>Log Your Mood Today</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Mood Severity</Form.Label>
            <Form.Select value={mood} onChange={(e) => setMood(e.target.value)} required>
              <option value="">Select Mood</option>
              <option value="severe">😢 Severe</option>
              <option value="moderate">😟 Moderate</option>
              <option value="mild">🙂 Mild</option>
              <option value="none">😄 None</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sleep (in hours)</Form.Label>
            <Form.Control
              type="number"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Notes (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default MoodTrack;
