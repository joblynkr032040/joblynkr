/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import { motion , useScroll, useTransform } from 'framer-motion';

const StepOne = () => {
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
        className={`flex ${isMobile ? 'flex-col items-start' : 'flex-row items-center'} max-w-7xl w-full gap-12`}
      >
        {/* Left Text Content */}
        <div className="flex-1 text-left space-y-4">
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: 'italic', fontWeight: 400 }}
            className="text-gray-600"
          >
            STEP 1
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700 }}
            className="text-[#121212] font-[Poppins]"
          >
            Build Your Personal Brand
          </Typography>
          <ul className="list-disc ml-5 text-gray-600 space-y-1 text-base">
            <li>Craft ATS-compliant resumes and personalized cover letters</li>
            <li>
              Create recruiter-ready LinkedIn profiles tailored to your target
              industry
            </li>
            <li>
              Develop project-based showcases to elevate your online presence
            </li>
            <li>
              Your brand is your passport to interviews. We ensure recruiters
              stop scrolling and start noticing.
            </li>
          </ul>
        </div>

        {/* Right Visual Content */}
        <div
          className={`flex-1 flex ${isMobile ? 'justify-center' : 'justify-end'}`}
        >
          <div className="bg-[#fff6ea] rounded-[2rem] p-6 w-fit shadow-md">
            <img
              src="/step1v1.png"
              alt="Research visual"
              className="w-full max-w-[600px] h-auto rounded-[2rem] shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StepOne;
