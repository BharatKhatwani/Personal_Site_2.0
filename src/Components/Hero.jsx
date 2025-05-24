import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="text-center flex flex-col justify-center items-center w-full h-screen px-4 scroll-mt-20"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-7xl font-bold mb-4">
        I am <span className="text-[#4EC3FF]">Bharat Khatwani</span>
      </h1>

      {/* Type Animation */}
      <TypeAnimation
        sequence={[
          'Software Developer', 1200,
          'Full Stack Developer', 1200,
          'Problem Solver', 1200,
          'Fitness Freak', 1200,
        ]}
        wrapper="span"
        speed={40}
        className="text-xl md:text-3xl text-gray-400 mb-8 mt-2"
        repeat={Infinity}
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-4 justify-center flex-wrap">
        <a href="#contact">
          <button className="px-6 py-3 bg-[#4EC3FF] text-white rounded-lg hover:bg-blue-400 transition">
            Get in Touch
          </button>
        </a>

        <a href="./resume.pdf" download>
          <button className="py-3 px-6 border border-[#4EC3FF] rounded-lg text-[#4c9aff] hover:bg-[#4c9aff] hover:text-white transition">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
