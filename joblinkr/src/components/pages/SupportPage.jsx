

import React, { useEffect, useRef } from "react";
import ContactForm from "../ContactForm";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const SupportPage = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    gsap.to(blobRef.current, {
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      morphSVG: {
        shape:
          "M440,60Q380,120,400,200Q420,280,340,300Q260,320,200,300Q140,280,100,220Q60,160,100,100Q140,40,220,20Q300,0,360,40Q420,80,440,60Z",
      },
    });
  }, []);

  return (
    <main className="relative min-h-screen rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden px-4 py-10">
      {/* 🔵 Animated blob background */}
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[800px] h-[800px] -top-40 -left-40 blur-3xl opacity-20 z-0 text-blue-600"
      >
        <path
          ref={blobRef}
          fill="currentColor"
          d="M421,311Q400,422,289,424Q178,426,103,358Q28,290,78,200Q128,110,224,84Q320,58,402,129Q484,200,421,311Z"
        />
      </svg>

      {/* 🧊 Form with glass effect */}
      <section className="relative z-10 w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          💬 We’d love to connect with you! 
        </h1>
        <p className="text-center text-gray-300 mb-8">
           Fill in the form and expect a response within 3 hours.
        </p>
        <ContactForm />
      </section>
    </main>
  );
};

export default SupportPage;
