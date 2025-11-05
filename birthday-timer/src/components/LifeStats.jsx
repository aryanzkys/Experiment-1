import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';

const LifeStats = ({ isPaused }) => {
  const birthDate = new Date('2007-08-25T00:00:00');

  const calculateStats = () => {
    const now = new Date();
    const diff = now - birthDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days,
      hours,
      minutes,
      seconds,
      heartbeats: Math.floor(minutes * 80),
      blinks: Math.floor(minutes * 15),
      breaths: Math.floor(minutes * 16),
      steps: Math.floor(days * 7000),
    };
  };

  const [stats, setStats] = useState(calculateStats());

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setStats(calculateStats());
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
      <StatCard value={stats.days} label="Days Lived" icon="🗓️" />
      <StatCard value={stats.hours} label="Hours Lived" icon="🕰️" />
      <StatCard value={stats.heartbeats} label="Heartbeats" icon="❤️" />
      <StatCard value={stats.blinks} label="Blinks" icon="👁️" />
      <StatCard value={stats.breaths} label="Breaths" icon="🌬️" />
      <StatCard value={stats.steps} label="Steps Taken" icon="🚶‍♂️" />
      <StatCard value={stats.minutes} label="Minutes Lived" icon="⏱️" />
      <StatCard value={stats.seconds} label="Seconds Lived" icon="⏳" />
    </div>
  );
};

export default LifeStats;
