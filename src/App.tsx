import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Education from './components/Education';
import Experience from './components/Experince';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 vikas Rahangdale. Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;