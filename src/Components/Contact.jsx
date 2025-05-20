import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:your.email@example.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#4EC3FF] mb-6 text-center">Contact</h2>
      <p className="text-gray-300 text-center mb-10">
        Interested in working together or have a question? Let's talk!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#121212] p-8 rounded-lg shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-[#1f1f1f] text-white outline-none focus:ring-2 focus:ring-[#4EC3FF]"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-[#1f1f1f] text-white outline-none focus:ring-2 focus:ring-[#4EC3FF]"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded bg-[#1f1f1f] text-white outline-none focus:ring-2 focus:ring-[#4EC3FF]"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-[#4EC3FF] text-black font-semibold py-3 rounded hover:bg-[#38a8e0] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
