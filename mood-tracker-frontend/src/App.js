import React from 'react';
import MoodForm from './MoodForm';
import MoodCalendar from './MoodCalendar'
import MoodChart from './MoodChart';

const App = () => {
  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <MoodForm />
      <MoodCalendar />
      <MoodChart />
    </div>
  );
};

export default App;
