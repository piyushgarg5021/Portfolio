import React, { useEffect, useState } from 'react';
import './app.css';
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Intro from "./components/intro/intro";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/skills";
import ThemeToggle from "./components/Thems/ThemeToggle";
const App = () => {
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    document.body.className = theme; // Update the body class based on the theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navbar />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} /> {/* Add the ThemeToggle component */}
      <Intro />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;