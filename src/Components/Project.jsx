import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'QuickTalk Chat App',
    description: 'A real-time chat application with Firebase Auth and Firestore.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://quicktalk.app',
    github: 'https://github.com/yourname/quicktalk',
  },
  {
    title: 'Expense Tracker',
    description: 'Track your daily expenses with analytics and login system.',
    tech: ['MERN', 'JWT', 'Chart.js'],
    live: 'https://expensetrack.live',
    github: 'https://github.com/yourname/expense-tracker',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-12 mt-14">
      <h2 className="text-6xl font-bold text-[#4EC3FF] mb-12 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 m-8" >
        {projects.map(({ title, description, tech, live, github }, index) => (
          <div
            key={index}
            className="group bg-[#121212] rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Project Title */}
            <h3 className="text-xl font-semibold text-white group-hover:text-[#4EC3FF] mb-8">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4EC3FF] hover:underline flex items-center gap-1"
              >
                Live <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4EC3FF] hover:underline flex items-center gap-1"
              >
                GitHub <FaGithub size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
