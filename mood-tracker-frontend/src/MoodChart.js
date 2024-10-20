import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const MoodChart = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const response = await axios.get('http://localhost:8000/moods');
      setMoods(response.data);
    };
    fetchMoods();
  }, []);

  const data = moods.map((mood) => ({
    date: new Date(mood.date).toLocaleDateString(),
    mood: mood.mood === 'Happy' ? 3 : mood.mood === 'Neutral' ? 2 : 1,
  }));

  return (
    <div>
      <h2>Mood Trends</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
