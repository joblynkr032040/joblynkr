


import React from 'react';
import {Link} from 'react-router-dom'

const profileImages = [
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/34.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/80.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg"
];

const BlueBoxTwo = () => {
  return (
    <div className="w-full mt-16 overflow-hidden rounded-xl">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Ambitious Students from 10+ countries trust </h2>
        <p className="text-4xl italic text-[#5F7CFF] mt-2 font-medium">JobLynkr</p>
      </div>

      {/* Two rows, opposite scroll */}
      <div className="mt-12 space-y-6">
        {/* Top Row */}
        <div className="overflow-hidden fade-mask">
          <div className="flex gap-14 animate-scrollLeft whitespace-nowrap w-max">
            {profileImages.concat(profileImages).map((src, i) => (
              <img
                key={`top-${i}`}
                src={src}
                alt={`creator-${i}`}
                className="w-20 h-20 rounded-full object-cover inline-block mx-8"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="overflow-hidden fade-mask">
          <div className="flex gap-14 animate-scrollRight whitespace-nowrap w-max">
            {profileImages.concat(profileImages).map((src, i) => (
              <img
                key={`bottom-${i}`}
                src={src}
                alt={`creator-${i}`}
                className="w-20 h-20 rounded-full object-cover inline-block mx-8"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 w-full py-10 px-4 flex flex-col md:flex-row items-center justify-between rounded-xl max-w-7xl mx-auto">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold italic text-center md:text-left">
          Join over Hundreds of Students<span className="text-blue-400 font-normal not-italic"> getting hired.</span> 
        </p>
       <Link to="/contact">
        <button className="mt-6 md:mt-0 bg-[#2F71F2] hover:bg-[#1f59d8] text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          Start For Free
        </button>
      </Link>
      </div>
    </div>
  );
};

export default BlueBoxTwo;
