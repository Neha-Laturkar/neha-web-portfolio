import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <footer style={{
        textAlign: 'center', padding: '2rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--text3)', fontSize: '0.82rem',
        fontFamily: 'var(--mono)'
      }}>
        © 2026 Neha R Sutar · Built with React · Norwich, UK
      </footer>
    </div>
  );
}

export default App;