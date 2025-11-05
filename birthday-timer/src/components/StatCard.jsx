import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, icon }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex flex-col items-center text-center w-full"
      whileHover={{ scale: 1.05, rotateZ: '1deg', rotateY: '10deg' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="text-4xl text-amber-600 mb-4">{icon}</div>
      <p className="text-4xl font-bold text-gray-800">
        {value.toLocaleString('en-US')}
      </p>
      <p className="text-md text-gray-600 uppercase tracking-wider mt-2">{label}</p>
    </motion.div>
  );
};

export default StatCard;
