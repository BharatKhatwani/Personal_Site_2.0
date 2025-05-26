import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mt-48 px-6 py-12 border border-gray-700 text-center text-gray-200 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(78, 195, 255, 0.4)' }}
    >
      <p className="text-base md:text-lg leading-relaxed tracking-wide">
        I'm <span className='text-[#4EC3FF] font-bold'>Bharat Khatwani</span>, a 21-year-old Computer Science and Engineering student from Indore, India, currently in my third year.
        <br /><br />
        I have a strong foundation in Data Structures and Algorithms and a passion for building scalable, modern applications using the MERN Stack.
        <br /><br />
        I aim to write clean, efficient code and create user-centric digital experiences while continuously improving my skills.
      </p>

      <div className="mt-12">
        <h1 className="text-xl font-semibold mb-3">Follow Me</h1>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X) Profile"
            className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
          >
            <FaXTwitter size={26} />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 w-24 mx-auto" />
    </motion.section>
  );
};

export default About;
