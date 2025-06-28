/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const StepTwo = () => {
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
      className="w-full bg-white py-14 px-4 md:px-20 flex justify-center items-center"
    >
      <div
        className={`flex ${
          isMobile ? 'flex-col-reverse items-start' : 'flex-row items-center'
        } max-w-7xl w-full gap-12`}
      >
        {/* Left Image Section */}
        <div
          className={`flex-1 flex ${
            isMobile ? 'justify-center' : 'justify-start'
          } mt-6 mr-5`}
        >
          <div className="bg-[#e7efff] rounded-[2rem] p-6 w-fit shadow-md">
            <img
              src="/webimg3.avif"
              alt="Write Step Visual"
              className="w-full max-w-[600px] h-auto rounded-[2rem] shadow-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-left space-y-4">
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: 'italic', fontWeight: 400 }}
            className="text-gray-600"
          >
            STEP 2
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700 }}
            className="text-[#121212] font-[Poppins]"
          >
            Apply Smart — With Support
          </Typography>
          <ul className="list-disc ml-5 text-gray-600 space-y-1 text-base">
            <li>
              Research and identify global job opportunities aligned with your
              aspirations
            </li>
            <li>
              Apply on your behalf, ensuring every application is tailored to
              your goals.
            </li>
            <li>
              Offer a results-driven model where you pay only after interviews
              are secured
            </li>
            <li>
              Stop guessing where and how to apply. We’ll handle the hard work
              so you can focus on preparing for success.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StepTwo;