import React from 'react';
import { motion } from 'framer-motion';

const Particle = ({ x, y, size, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-amber-200/50"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [y, y + Math.random() * 20 - 10, y],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const BackgroundParticles = () => {
  const particles = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {particles.map(p => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
};

export default BackgroundParticles;
