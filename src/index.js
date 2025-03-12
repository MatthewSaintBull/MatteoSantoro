import { createRoot } from 'react-dom/client';
import ContactsSection from './components/Contacts';
import HeroSection from './components/Hero';
import InfoSection from './components/Info';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

const App = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
      const sectionElements = sections.map(id => 
        id === 'home' ? document.getElementById('hero') : document.getElementById(id)
      );
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop - 100 <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionId === 'home' 
      ? document.getElementById('hero')
      : document.getElementById(sectionId);
      
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Chi Sono' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Progetti' },
    { id: 'contacts', label: 'Contatti' }
  ];

  return (
    <>
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={require('./assets/logo.svg')} 
                alt="Matteo Santoro" 
                className={`h-10 transition-all duration-300 ${scrolled ? 'filter-none' : 'brightness-0 invert'}`} 
                width={150} 
                height={40} 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.id 
                    ? (scrolled ? 'text-blue-700 border-b-2 border-blue-700' : 'text-white border-b-2 border-white') 
                    : (scrolled ? 'text-gray-800 hover:text-blue-700' : 'text-gray-200 hover:text-white')}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://github.com/MatthewSaintbull" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-700' : 'text-gray-200 hover:text-white'}`}
              >
                <i className="fab fa-github mr-2 text-lg"></i>
                GitHub
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} ${scrolled ? 'text-gray-900' : 'text-white'}`}></i>
            </button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white shadow-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-4">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-3 border-b border-gray-100 ${activeSection === item.id ? 'text-blue-700 font-medium' : 'text-gray-800'}`}
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="https://github.com/MatthewSaintbull" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center py-3 text-gray-800 hover:text-blue-700"
                >
                  <i className="fab fa-github mr-2 text-lg"></i>
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Progress bar */}
      <motion.div className='fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-[0%] z-50' style={{ scaleX: scrollYProgress }}>
      </motion.div>

      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with ID for navigation */}
        <div id="hero">
          <HeroSection />
        </div>
        
        <div className="container mx-auto py-16 px-6">
          {/* About Section */}
          <div id="about" className="scroll-mt-20 mb-16">
            <InfoSection />
          </div>
          
          {/* Skills Section */}
          <div id="skills" className="scroll-mt-20 mb-16">
            <SkillsSection />
          </div>
          
          {/* Projects Section */}
          <div id="projects" className="scroll-mt-20 mb-16">
            <ProjectsSection />
          </div>
          
          {/* Contacts Section */}
          <div id="contacts" className="scroll-mt-20 mb-16">
            <ContactsSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <img src={require('./assets/logo.svg')} alt="Matteo Santoro" className="h-8 brightness-0 invert" />
                <p className="mt-2 text-sm text-blue-200">© {new Date().getFullYear()} Matteo Santoro. Tutti i diritti riservati.</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/MatthewSaintbull" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/matteo-santoro/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="https://medium.com/@mttdev1997" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
                  <i className="fab fa-medium text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

const app = document.getElementById('app');
if (app) {
  createRoot(app).render(<App />);
}