import React, { useState, useEffect } from 'react';

// Reusable component for displaying a single time unit (e.g., Days, Hours)
const TimeCard = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-32 h-32 shadow-lg">
    <span className="text-5xl font-bold text-gray-800">{String(value).padStart(2, '0')}</span>
    <span className="text-sm uppercase tracking-widest text-gray-600 mt-2">{label}</span>
  </div>
);

const CountdownTimer = ({ isPaused }) => {
  // Calculates the time remaining until the next birthday
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-08-25T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If the countdown is over, display all zeros
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // If paused, do not update the timer
    if (isPaused) {
      return;
    }

    // Set up a timer to recalculate time left every second
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft()); // <-- CORRECTED THIS LINE
    }, 1000);

    // Clean up the timer when the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [timeLeft, isPaused]); // Rerun the effect if timeLeft or isPaused changes

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
