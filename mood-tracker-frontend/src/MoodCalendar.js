import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';

const MoodCalendar = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const response = await axios.get('https://mood-tracker-app-kau4.onrender.com');
      setMoods(response.data);
    };
    fetchMoods();
  }, []);

  const tileClassName = ({ date }) => {
    const moodForDay = moods.find((mood) => new Date(mood.date).toDateString() === date.toDateString());
    if (moodForDay) {
      switch (moodForDay.mood) {
        case 'Happy':
          return 'happy-mood';
        case 'Sad':
          return 'sad-mood';
        case 'Neutral':
          return 'neutral-mood';
        default:
          return null;
      }
    }
  };

  return (
    <div>
      <h2>Your Mood Calendar</h2>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
};

export default MoodCalendar;
