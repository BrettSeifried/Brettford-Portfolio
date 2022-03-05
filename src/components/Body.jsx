import React from 'react';
import AboutMe from '../Views/AboutMe';
import Contact from '../Views/Contact';
import Project1 from '../views/Project1';
import Project2 from '../Views/Project2';
import Project3 from '../views/Project3';
import Projects from '../views/Projects';
import Resume from '../Views/Resume';
import './Body.css';

export default function Body() {
  return (
    <div>
      <h1>BRETT SEIFRIED</h1>
      <a>Father | Veteran | Developer</a>
      <div className="body">
        <AboutMe />
        <Contact />
        <Projects />
        <Resume />
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </div>
  );
}
