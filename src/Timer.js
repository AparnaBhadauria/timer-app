import React from 'react';

const Timer = ({ timer, removeTimer }) => {
  const formattedTime = new Date(timer.createdAt).toLocaleString();

  return (
    <div className="timer">
      <div>Created At: {formattedTime}</div>
      <div>Remaining Time: {timer.remainingTime.toFixed(2)} seconds</div>
      <button className="button delete-button" onClick={() => removeTimer(timer.id)}>Delete</button>
    </div>
  );
};

export default Timer;
