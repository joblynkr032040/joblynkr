


import React from "react";
import ReviewCard from "./reusable/ReviewCard";

// Sample data
const testimonials = [
  {
    quote:
      "⭐️⭐️⭐️⭐️⭐️ I was applying to jobs for months with no replies. After using Joblinkr, I got 3 interviews in 2 weeks. The resume they made actually passed the ATS filters!",
    name: "Rahul S.",
    role: "India",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "⭐️⭐️⭐️⭐️⭐️ I didn’t know how to write a LinkedIn summary or create a portfolio. Joblinkr handled everything. My profile now looks professional and I already got calls from 2 companies in Canada.",
    name: "Precious A.",
    role: "Nigeria",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "⭐️⭐️⭐️⭐️⭐️ The mock interview helped me gain confidence. They even guided me on how to talk about my projects. I cracked my first interview thanks to them.",
    name: "Anjali M.",
    role: "India",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote:
      "⭐️⭐️⭐️⭐️ I paid only after I got an interview — which is the best part. I didn’t believe it would work, but they actually applied to jobs for me and it worked!",
    name: "Bikash T.",
    role: "Nepal",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "⭐️⭐️⭐️⭐️⭐️ They built a real project for my resume that showed off my Node.js skills. The recruiter mentioned it in the interview — totally worth it.",
    name: "Sameer R.",
    role: "India",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    quote:
      "⭐️⭐️⭐️⭐️⭐️ I always thought my resume was good until I saw the one Joblinkr made. Now I finally feel confident applying to jobs abroad.",
    name: "Daniel O.",
    role: "Nigeria",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const ReviewCardContainer = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full py-16 bg-white overflow-hidden space-y-12 fade-mask">
      {/* Top Row - Scroll Left */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 w-max animate-scrollLeft px-4 md:px-12">
          {duplicatedTestimonials.map((item, index) => (
            <div className="inline-block" key={`top-${index}`}>
              <ReviewCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 w-max animate-scrollRight px-4 md:px-12">
          {duplicatedTestimonials.map((item, index) => (
            <div className="inline-block" key={`bottom-${index}`}>
              <ReviewCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardContainer;
