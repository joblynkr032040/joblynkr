/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What exactly does Joblinkr do?",
    answer:
      "We help students from various countries build their personal brand to land global job opportunities. That includes resume creation, LinkedIn optimization, project portfolios, mock interviews, and even job applications — all done-for-you.",
  },
  {
  question: "How is Joblinkr different from a typical service?",
  answer:
    "Joblinkr offers a holistic approach to personal branding and job readiness. Unlike typical services that focus solely on resume formatting, we enhance your entire professional profile. This includes creating tailored resumes and cover letters, optimizing your LinkedIn presence, building custom projects for your portfolio, and even applying to jobs on your behalf. Additionally, our premium plans operate on a success-based model, ensuring you only pay extra when you start receiving interview calls.",
  },
  {
    question: "Do I need coding skills to work with you?",
    answer:
      "No. Whether you’re a developer, designer, or analyst — we tailor the service to your field. For tech roles, we also offer custom project creation to strengthen your portfolio.",
  },
  {
    question: "Do you guarantee job placement?",
    answer:
      "We don’t promise jobs — no one legit can. But we do guarantee that your profile will stand out and that real recruiters will start noticing you. We only charge success-based fees when you get interview calls.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click the “Get Started” or “Book Free Consultation” button, and we’ll schedule a call to understand your goals, evaluate your current profile, and suggest the best plan.",
  },
{
  question: "What’s included in the Standard Plan?",
  answer:
    "The Standard Plan is designed to give job seekers a strong foundation to stand out. It includes:\n\n- Resume building: A professionally crafted resume tailored to your career goals.\n- Cover letter: A personalized cover letter that highlights your skills and achievements.\n- Mock interviews: Three mock interview sessions to improve your communication skills and confidence.\n- Portfolio website: A custom-built portfolio to showcase your work and achievements.\n- Projects for resume: Creation of relevant projects, if needed, to enhance your professional profile (additional charges apply).\n- Comprehensive support: Everything required to make your profile interview-ready and catch the attention of recruiters.",
},
  {
    question: "What’s different in the Premium Plan?",
    answer:
      "You’ll get everything in Standard, plus we apply to jobs for you and only charge an extra fee after you get interview calls — so there’s no upfront risk.",
  },
  {
    question: "Can you build real projects for my resume or LinkedIn?",
    answer:
      "Yes. With our Project Plan, we create custom projects (Normal, Standard, or Elite level) to match your skills and career goals. Each project includes detailed explanations to help you talk about them in interviews.",
  },
  {
    question: "How do payments and fees work?",
    answer:
      "We keep it simple:\n\n- Standard Plan is a one-time fee.\n- Premium Plan includes a performance-based fee per interview.\n- Project Plan is priced per project level.\n\nWe’ll always explain everything clearly before you pay.",
  },
];


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Your top questions <span className="text-blue-500 italic">answered clearly</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <Typography className="text-lg font-semibold text-gray-900">
                {faq.question}
              </Typography>
              <IconButton>
                {activeIndex === index ? (
                  <CloseIcon className="text-blue-500" />
                ) : (
                  <AddIcon className="text-blue-500" />
                )}
              </IconButton>
            </div>

            <Collapse in={activeIndex === index}>
              <div className="px-5 pb-5">
                <Typography className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </Typography>
              </div>
            </Collapse>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
