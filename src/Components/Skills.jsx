import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaJava } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'Express', icon: <SiExpress size={40} color="#000000" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} color="#000000" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
  { name: 'Redux', icon: <SiRedux size={40} color="#764ABC" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'Docker', icon: <FaDocker size={40} color="#0db7ed" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-4 py-32 min-h-screen w-full mb-16"
    >
      <h2 className="text-6xl font-bold text-[#4EC3FF] mb-16 text-center">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-[#121212] rounded-lg p-6 shadow-md hover:text-black cursor-default transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ minWidth: '120px', flex: '1 1 120px', maxWidth: '150px' }}
          >
            {icon}
            <p className="mt-3 text-white font-semibold text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
