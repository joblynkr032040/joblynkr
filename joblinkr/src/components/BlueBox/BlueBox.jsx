import React from 'react';
import BlueBoxTwo from "./BlueBoxTwo"

const BlueBox = () => {
  return (
    <div className="w-full min-h-screen bg-[#0A0A23] flex flex-col items-center py-6 sm:py-12 px-4 rounded-xl">

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
        How<span className="text-[#5F7CFF] italic"> JobLinkr </span>Works Behind the Scenes?
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-5xl mt-12 fade-mask">
        <img
          src="/blueBannerImg2.jpg" // Make sure to place this image inside your public/ folder or serve from /src/assets
          alt="AI Working Flow"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* next component  */}

      <BlueBoxTwo/>
      
    </div>
  );
};

export default BlueBox;
