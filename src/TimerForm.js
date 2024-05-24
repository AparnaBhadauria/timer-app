import React, { useState } from 'react';

const TimerForm = ({ addTimer }) => {
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(parseFloat(seconds));
      setSeconds('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Enter seconds"
      />
      <button className="button add-button" type="submit">Add Timer</button>
    </form>
  );
};

export default TimerForm;
