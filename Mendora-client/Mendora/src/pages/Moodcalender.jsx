
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const MoodCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/mood/calendar').then((res) => {
      const formatted = res.data.map(entry => ({
        title: `${entry.mood.toUpperCase()} - ${entry.sleepHours} hrs`,
        date: entry.date,
      }));
      setEvents(formatted);
    });
  }, []);

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h3>📅 Mood Calendar</h3>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </Card>
    </Container>
  );
};

export default MoodCalendar;
