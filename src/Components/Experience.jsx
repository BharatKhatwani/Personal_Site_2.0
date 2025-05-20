import React from 'react';
import { FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Experience = () => {
  return (
  <section
  id="experience"
  className="max-w-4xl mx-auto  px-6 py-12 bg-black text-gray-200 rounded-xl shadow mt-32"
>
  <h2 className="text-center text-3xl font-semibold mb-4 text-[#4EC3FF]">College Event Website</h2>
  <hr className="border-gray-700 mb-6" />

  <p className="text-center text-gray-400 mb-4 text-sm">
    <SlCalender className="inline-block mr-2" />
    July 2024 – August 2024
  </p>

  <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-2xl mx-auto mb-6">
    <li>Built a website for event registration.</li>
    <li>Handled 500+ users with auto-confirmation emails.</li>
    <li>Designed with mobile-first, responsive UI principles.</li>
  </ul>

  <div className="flex justify-center gap-3 mb-6 text-sm">
    <span className="border px-2 py-1 rounded border-gray-600">React</span>
    <span className="border px-2 py-1 rounded border-gray-600">Shadcn UI</span>
    <span className="border px-2 py-1 rounded border-gray-600">Firebase</span>
  </div>

  <div className="flex justify-center gap-8 text-sm text-gray-400">
    <a href="#" className="hover:underline flex items-center gap-2">
      <FaGithub /> View Code
    </a>
    <a href="#" className="hover:underline">Live Demo</a>
  </div>
</section>





  );
};

export default Experience;
