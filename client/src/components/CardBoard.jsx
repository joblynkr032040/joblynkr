/* eslint-disable no-unused-vars */

import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const CardBoard = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const cardsTop = [
    {
      src: '/board/jobleads.jpg',
      alt: 'Daily Job Leads',
      title: 'Daily Job Leads',
      desc: 'Fresh job profiles curated from global platforms — matched to your skills and goals.',
      bg: 'bg-[#eef3ff]',
    },
    {
      src: '/board/resumeoptimization.jpg',
      alt: 'Keyword Research',
      title: 'Resume Optimizer',
      desc: 'ATS-friendly, recruiter-tested resumes crafted to pass filters and win interviews.',
      bg: 'bg-[#e7f7ee]',
    },
    {
      src: '/board/linkdinopti.jpg',
      alt: 'LinkedIn Builder',
      title: 'LinkedIn Builder',
      desc: 'Headline, summary, and profile rewrite to attract recruiters and increase visibility.',
      bg: 'bg-[#fdeef0]',
    },
    {
      src: '/board/portfoliowebsite.jpg',
      alt: 'Portfolio Projects',
      title: 'Portfolio Projects',
      desc: 'Real, custom projects built for your resume and LinkedIn — with full explanations.',
      bg: 'bg-[#fdf6e4]',
    },
  ];

  const cardsBottom = [
    {
      src: '/board/mockinterview.jpg',
      alt: 'Mock Interviews',
      title: 'Mock Interviews',
      desc: 'Practice with real job-based questions — and get feedback that actually helps.',
      bg: 'bg-[#fff3e4]',
    },
    {
      src: '/board/jobapplication.jpg',
      alt: 'Auto Ideation',
      title: 'Success-Based Job Apps',
      desc: 'We apply for jobs on your behalf. You only pay when you get an interview.',
      bg: 'bg-[#e7ecfc]',
    },
  ];

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
    >
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
              <div
                key={index}
                className={`w-full ${card.bg} rounded-2xl p-6 shadow-lg flex flex-col justify-between`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto rounded-xl mb-4"
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
              </div>
            ))}
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardsBottom.map((card, index) => (
              <div
                key={index}
                className={`w-full ${card.bg} rounded-2xl p-8 shadow-lg flex flex-col justify-between`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto rounded-xl mb-4"
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
              </div>
            ))}
          </div>
        </div>
      </Box>
    </motion.div>
  );
};

export default CardBoard;


