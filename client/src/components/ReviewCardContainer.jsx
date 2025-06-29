


import React from "react";
import ReviewCard from "./reusable/ReviewCard";
import { testimonials } from "../assets/testimonial"




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
