.;import React, { useState, useEffect } from 'react';
import TimerList from './TimerList';
import TimerForm from './TimerForm';
import './TimerApp.css';

const TimerApp = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdAt: new Date(),
      remainingTime: seconds,
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(timers => timers.map(timer => {
        if (timer.remainingTime > 0) {
          return { ...timer, remainingTime: timer.remainingTime - 0.01 };
        }
        return timer;
      }).filter(timer => timer.remainingTime > 0));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-app">
        <h1>Timer App</h1>
      <div className="timer-list">
        <TimerList timers={timers} removeTimer={removeTimer} />
      </div>
      <div className="timer-form">
        <h2>Add Timer</h2>
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
};

export default TimerApp;
