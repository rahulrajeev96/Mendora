import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MoodGraph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios.get('/api/mood/graphdata').then(res => {
      setGraphData(res.data);
    });
  }, []);

  const labels = graphData.map(entry => entry.date);
  const moodLevels = graphData.map(entry => {
    switch (entry.mood) {
      case 'severe': return 1;
      case 'moderate': return 2;
      case 'mild': return 3;
      case 'none': return 4;
      default: return 0;
    }
  });
  const sleepHours = graphData.map(entry => entry.sleepHours);

  const data = {
    labels,
    datasets: [
      {
        label: 'Mood Level (1-Severe to 4-None)',
        data: moodLevels,
        borderColor: 'purple',
        tension: 0.3,
      },
      {
        label: 'Sleep Hours',
        data: sleepHours,
        borderColor: 'blue',
        tension: 0.3,
      }
    ]
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h3>📈 Mood and Sleep Trends</h3>
        <Line data={data} />
      </Card>
    </Container>
  );
};

export default MoodGraph;
