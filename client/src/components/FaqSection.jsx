/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, Collapse } from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {faqs} from "../assets/faqs";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Your top questions{" "}
        <span className="text-blue-500 italic">answered clearly</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={faq.question || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="border border-gray-200 rounded-2xl"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <Typography className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </Typography>
                {isOpen ? (
                  <CloseIcon className="text-blue-500" />
                ) : (
                  <AddIcon className="text-blue-500" />
                )}
              </button>

              <Collapse in={isOpen}>
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <Typography className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </Typography>
                </motion.div>
              </Collapse>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
