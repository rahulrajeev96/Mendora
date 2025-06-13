// MoodTrackingDashboard.jsx
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Moodgraph.css";

const MoodTrackingDashboard = () => {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Replace this with an API call to your backend
    const sampleData = [
      { date: "2025-06-01", mood: 2, moodEmoji: "😔", severity: "Moderate", sleep: 6 },
      { date: "2025-06-02", mood: 3, moodEmoji: "😐", severity: "Mild", sleep: 7 },
      { date: "2025-06-03", mood: 1, moodEmoji: "😭", severity: "Severe", sleep: 4 },
      { date: "2025-06-04", mood: 4, moodEmoji: "😊", severity: "None", sleep: 8 },
    ];
    setRecords(sampleData);
  }, []);

  const getTileContent = ({ date }) => {
    const record = records.find(
      (r) => new Date(r.date).toDateString() === date.toDateString()
    );
    return record ? <span className="emoji-tile">{record.moodEmoji}</span> : null;
  };

  const getRecordForDate = (date) => {
    return records.find(
      (r) => new Date(r.date).toDateString() === date.toDateString()
    );
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f2f9f7" }}>
      <h2 style={{ marginBottom: "20px" }}>📊 Mood Tracker Dashboard</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        <div>
          <h4>📅 Interactive Mood Calendar</h4>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={getTileContent}
            className="styled-calendar"
          />

          {selectedDate && (
            <Card style={{ marginTop: "20px", padding: "15px" }}>
              <h5>Details for {selectedDate.toDateString()}</h5>
              {(() => {
                const record = getRecordForDate(selectedDate);
                return record ? (
                  <ul>
                    <li>Mood: {record.moodEmoji}</li>
                    <li>Severity: {record.severity}</li>
                    <li>Sleep: {record.sleep} hours</li>
                  </ul>
                ) : (
                  <p>No record found.</p>
                );
              })()}
            </Card>
          )}
        </div>

        <div>
          <h4>📈 Mood & Sleep Analysis (Bar Chart)</h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={records} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="mood" fill="#8884d8" name="Mood (1-5)" />
              <Bar dataKey="sleep" fill="#82ca9d" name="Sleep (hrs)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MoodTrackingDashboard;
