import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-6 py-12  ">
      <div className="w-full max-w-3xl rounded-2xl shadow-xl p-10 space-y-6 border border-gray-700 ">
        <h1 className="text-4xl font-bold text-center text-[#4EC3FF] mb-12">Get in touch with Me</h1>

        <div className="flex items-start gap-4">
          <MdEmail className="text-2xl text-white mt-1" />
          <p>
            <strong className="text-white">Email:</strong>{' '}
            <span className="text-blue-300">
              
              bharatkhatwani796@gmail.com</span>
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaTwitter className="text-2xl text-white mt-1" />
          <p>
            <strong className="text-white">DM on Twitter:</strong>{' '}
            <a
              href="https://twitter.com/bharat_khatwani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              @bharat_khatwani
            </a>
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLinkedin className="text-2xl text-white mt-1" />
          <p>
            <strong className="text-white">DM on LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/bharatkhatwani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              linkedin.com/in/bharatkhatwani
            </a>
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLocationDot className="text-2xl text-white mt-1" />
          <p>
            <strong className="text-white">Address:</strong>{' '}
            <span className="text-blue-300">Indore, Madhya Pradesh, India</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
