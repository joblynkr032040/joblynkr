/* eslint-disable no-unused-vars */


import React, { useRef } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const StepThree = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="w-full bg-white py-16 px-4 md:px-20 flex justify-center items-center"
    >
      <div
        className={`flex ${
          isMobile ? 'flex-col items-start' : 'flex-row items-center'
        } max-w-7xl w-full gap-12`}
      >
        {/* Left Text Section */}
        <div className="flex-1 text-left space-y-4">
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: 'italic', fontWeight: 400 }}
            className="text-gray-600"
          >
            STEP 3
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700 }}
            className="text-[#121212] font-[Poppins]"
          >
            Get Interview-Ready — and Win
          </Typography>
          <ul className="list-disc ml-5 text-gray-600 space-y-1 text-base">
            <li>
              Conduct mock interviews with actionable feedback (free with Standard Plan)
            </li>
            <li>
              Guide project creation to highlight your technical and creative skills
            </li>
            <li>
              Provide continuous support until you land your dream job offer
            </li>
            <li>
              Interviews aren’t about luck; they’re about preparation. With our strategies, you’ll go in confident and come out successful.
            </li>
          </ul>
        </div>

        {/* Right Visual Content */}
        <div className={`flex-1 flex ${isMobile ? 'justify-center' : 'justify-end'} mt-6`}>
          <div className="bg-[#e3fbe9] rounded-[2rem] p-6 w-fit shadow-md">
            <img
              src="/step3.png"
              alt="Analyze & Optimize Visual"
              className="w-full max-w-[600px] h-auto rounded-[2rem] shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StepThree;
