import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="w-full text-center flex flex-col items-center justify-center py-12 px-4">
      {/* Badge */}
      <div className="flex items-center gap-2 bg-white border border-blue-500 text-blue-600 rounded-full px-4 py-2 shadow-md mb-6">
        <FaStar className="text-blue-600 text-lg" aria-hidden="true" />
        <span className="text-sm sm:text-base font-medium">
          Rated 4.8/5 by 2000+ users
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-bold text-black text-center leading-snug max-w-3xl">
        Their success says{" "}
        <span className="italic text-blue-500 font-normal">more than we ever could</span>
      </h2>
    </div>
  );
};

export default Rating;
