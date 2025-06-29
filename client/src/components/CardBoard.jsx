/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { cardsTop, cardsBottom } from '../assets/CardData';

// Card Component with Scroll Animation
const Card = ({ card, size = 'md' }) => {
  const padding = size === 'lg' ? 'p-8' : 'p-6';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={`w-full ${card.bg} rounded-2xl ${padding} shadow-lg flex flex-col justify-between`}
    >
      <img
        src={card.src}
        alt={card.alt}
        className="w-full h-auto rounded-xl mb-4"
        loading="lazy"
      />
      <div className="text-left">
        <Typography
          variant="h6"
          className="font-bold text-gray-900 leading-tight"
        >
          {card.title}
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600 text-sm mt-2 leading-relaxed"
        >
          {card.desc}
        </Typography>
      </div>
    </motion.div>
  );
};

// Main CardBoard Section
const CardBoard = () => {
  return (
    <Box className="w-full px-4 py-14 flex flex-col items-center justify-center bg-white">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Everything you need to{' '}
            <span className="text-blue-500 italic">get Hired</span>
          </Typography>
        </div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cardsTop.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsBottom.map((card, index) => (
            <Card key={index} card={card} size="lg" />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default CardBoard;
