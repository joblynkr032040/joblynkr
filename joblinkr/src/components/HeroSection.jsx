/* eslint-disable no-unused-vars */

import React, { useRef } from 'react';
import { Typography, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/600-italic.css';
import { motion , useScroll, useTransform } from 'framer-motion';

const HeroSection = ({
  tagline = 'Trusted by 10k+ students',
  headlineMain = 'For Students Who Want',
  headlineEmphasis = 'Results,',
  headlineSub = 'Not Rejections',
  subtext = 'From resume to interviews — we handle everything that gets you hired.',
  buttonText = "See How It Works",
}) => {
  const ref = useRef(null);

  // scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] // triggers when top of element hits top, until it leaves
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className="pt-20 w-full flex flex-col items-center justify-center text-center px-4 mt-3 rounded-xl"
      style={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, #eef3ff 30%, #becde6 100%)`,
        scale,
        opacity,
      }}
    >
      {/* Chip */}
      <Chip
        label={tagline}
        sx={{
          bgcolor: '#e1fcef',
          color: '#0f9d58',
          fontWeight: 'bold',
          mb: 2,
          px: 2,
          py: 1,
          borderRadius: '20px',
        }}
      />

      {/* Headline */}
      <div className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
        <span>{headlineMain} </span>
        <span
          className="italic text-blue-500 font-light"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 600
          }}
        >
          {headlineEmphasis}
        </span>
        <div className="text-black mt-1 mb-4">{headlineSub}</div>
      </div>

      {/* Subtext */}
      <Typography
        variant="subtitle1"
        className="mt-6 text-gray-700 sm:text-lg text-lg max-w-xl mx-auto my-4"
        style={{ fontFamily: "'Display', serif" }}
      >
        {subtext}
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 4,
          mb: 4,
          px: 3,
          py: 1.5,
          fontSize: '1rem',
          borderRadius: '9999px',
          backgroundColor: '#2979ff',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        {buttonText}
      </Button>

      {/* Right Image Section */}
      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full max-w-[1200px] px-4">
          <img
            src="/homepagev3.png"
            alt="Dashboard Preview"
            className="rounded-xl shadow-lg mx-auto mb-1 w-full sm:w-[120%] md:w-[135%] lg:w-[100%] xl:w-[115%]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

