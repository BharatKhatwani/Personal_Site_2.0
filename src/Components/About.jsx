import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto mt-48 px-6 py-12 bg-black text-center text-gray-200 rounded-xl shadow-md"
    >
      <p className="text-base md:text-lg leading-relaxed tracking-wide">
        I'm <span className='text-[#4EC3FF] font-bold'> Bharat Khatwani</span>, a 21-year-old Computer Science and Engineering student from Indore, India, currently in my third year.
        <br /><br />
        I have a strong foundation in Data Structures and Algorithms and a passion for building scalable, modern applications using the MERN Stack.
        <br /><br />
        I aim to write clean, efficient code and create user-centric digital experiences while continuously improving my skills.
      </p>
      <div className="mt-10 border-t border-gray-700 w-24 mx-auto" />
    </section>
  );
};

export default About;
