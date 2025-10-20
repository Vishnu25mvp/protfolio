// App.jsx
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const { theme, setTheme, isDark, allThemes } = useContext(ThemeContext);

  // Function to cycle between themes
  const cycleTheme = () => {
    const currentIndex = allThemes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % allThemes.length;
    setTheme(allThemes[nextIndex]);
  };

  // ✅ Smooth scroll effect for the whole page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{
        background: 'var(--background)',
        color: 'var(--text)',
        transition: 'background-color 0.5s ease, color 0.5s ease',
      }}
    >
      <Navbar toggleTheme={cycleTheme} isDark={isDark} />
      <main
        className="transition-opacity duration-500 ease-in-out"
        style={{
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
