import React, { useState } from 'react';
import { FaSmile, FaFrown, FaMeh, FaGrinStars, FaTired, FaAngry, FaCoffee } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';

const MoodForm = () => {
  const [mood, setMood] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood) {
      alert('Please select a mood.');
      return;
    }
    await axios.post('http://localhost:8000/mood', {
      mood,
      date: new Date(),
    });
    alert('Mood logged successfully!');
    setMood(''); // Reset the form
  };

  <motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  style={{ display: 'inline-block' }}
  onClick={() => setMood('Happy')}
>
  <FaSmile size={50} color={mood === 'Happy' ? 'green' : 'gray'} />
</motion.div>


  return (
    <div>
      <h2>How are you feeling today?</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <FaSmile size={50} color={mood === 'Happy' ? 'yellow' : 'gray'} onClick={() => setMood('Happy')} />
        <FaFrown size={50} color={mood === 'Sad' ? 'darkblue' : 'gray'} onClick={() => setMood('Sad')} />
        <FaMeh size={50} color={mood === 'Neutral' ? 'orange' : 'gray'} onClick={() => setMood('Neutral')} />
        <FaGrinStars size={50} color={mood === 'Excited' ? 'lightblue' : 'gray'} onClick={() => setMood('Excited')} />
        <FaTired size={50} color={mood === 'Tired' ? 'blue' : 'gray'} onClick={() => setMood('Tired')} />
        <FaAngry size={50} color={mood === 'Angry' ? 'red' : 'gray'} onClick={() => setMood('Angry')} />
        <FaCoffee size={50} color={mood === 'Relaxed' ? 'pink' : 'gray'} onClick={() => setMood('Relaxed')} />

          
      </div>

      
      <button onClick={handleSubmit} style={{ padding: '10px', fontSize: '1.2rem', cursor: 'pointer' }}>Log Mood</button>
    </div>
  );
};

export default MoodForm;
