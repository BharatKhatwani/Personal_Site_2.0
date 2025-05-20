import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  return (
    <section className='min-h-screen text-center flex flex-col justify-center align-center  items-center px-4 ' id='home'>
      <h1 className='text-4xl md:text-7xl font-bold mb-4'>
  I am <span className='text-[#4EC3FF]'>Bharat Khatwani </span>
      </h1>
      <TypeAnimation
        sequence={[
          'I am Software Developer', 1000,
          'I am Full Stack Developer', 1000,
          'Problem Solver', 1000,
          'I am Fitness Freak', 1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-3xl text-gray-400 mb-8 mt-2"
      />
      <div className='flex gap-4 mt-4  justify-center flex-wrap'>
        <a href="#contact"></a>
        <button className='px-6 py-3 bg-[#4EC3FF] text-white rounded-lg hover:bg-blue-400 transition'>
          Get in Touch 
          </button>


        <a href="./resume.pdf" download>
            <button className='py-3 px-6 border border-[#4EC3FF] rounded-lg text-[#4c9aff] hover:bg-[#4c9aff] hover:text-white transition'>
   Download Resume 
          </button>
        </a>
        
          
          
        
      </div>
    </section>
  )
}

export default Hero
