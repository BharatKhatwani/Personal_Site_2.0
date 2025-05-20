// App.jsx
import './App.css'
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Loading from './Components/LaodingScreen.jsx';  // Assuming this is your loader screen

const About = lazy(() => import('./Components/About'));
const Experience = lazy(() => import('./Components/Experience.jsx'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds, then show app
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show your full screen Loading component
    return <Loading />;
  }

  // After loading done, show your navbar and app routes with suspense fallback
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
