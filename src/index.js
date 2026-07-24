import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import ContactsSection from './components/Contacts';
import HeroSection from './components/Hero';
import InfoSection from './components/Info';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import CommandPalette from './components/CommandPalette';

const paletteItems = [
  { group: 'Sezioni', label: 'Chi sono', hint: 'sezione', hash: 'about' },
  { group: 'Sezioni', label: 'Competenze', hint: 'sezione', hash: 'skills' },
  { group: 'Sezioni', label: 'Progetti', hint: 'sezione', hash: 'projects' },
  { group: 'Sezioni', label: 'Contatti', hint: 'sezione', hash: 'contacts' },
  { group: 'Collegamenti', label: 'GitHub', hint: 'github.com', href: 'https://github.com/MatthewSaintbull' },
  { group: 'Collegamenti', label: 'LinkedIn', hint: 'linkedin.com', href: 'https://www.linkedin.com/in/matteo-santoro/' },
  { group: 'Collegamenti', label: 'Medium', hint: 'medium.com', href: 'https://medium.com/@mttdev1997' },
  { group: 'Collegamenti', label: 'Curriculum', hint: 'PDF', href: require('./assets/CV.pdf') },
  { group: 'Collegamenti', label: 'Scrivimi una email', hint: 'admin@msantoro.com', href: 'mailto:admin@msantoro.com' },
];

const App = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen(open => !open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container-page nav__inner">
          <a className="nav__brand" href="#hero" aria-label="Matteo Santoro — torna su">
            <img src={require('./assets/logo.svg')} alt="Matteo Santoro" width={150} height={40} />
          </a>
          <div className="nav__spacer" />
          <a className="nav__link" href="#projects">Progetti</a>
          <a className="nav__link" href="#contacts">Contatti</a>
          <button className="searchpill" onClick={() => setIsPaletteOpen(true)} aria-label="Cerca (⌘K)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
            <span className="searchpill__text">Cerca…</span>
            <kbd>⌘K</kbd>
          </button>
          <a className="btn btn--quiet" href="#contacts">Contattami</a>
        </div>
      </header>

      <CommandPalette open={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} items={paletteItems} />

      <main>
        <div id="hero" className="section-anchor">
          <HeroSection />
        </div>

        <div id="about" className="section-anchor">
          <InfoSection />
        </div>

        <div id="skills" className="section-anchor">
          <SkillsSection />
        </div>

        <div id="projects" className="section-anchor">
          <ProjectsSection />
        </div>

        <div id="contacts" className="section-anchor">
          <ContactsSection />
        </div>
      </main>

      <footer className="container-page foot-stmt">
        <p className="foot-stmt__line display">Meno promesse, più codice in produzione.</p>
        <div className="foot-stmt__meta">
          <img src={require('./assets/logo.svg')} alt="Matteo Santoro" width={97} height={30} />
          <div className="foot-stmt__links link-list">
            <a href="https://github.com/MatthewSaintbull" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/matteo-santoro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@mttdev1997" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          <span className="foot-stmt__copy">© {new Date().getFullYear()} Matteo Santoro. Tutti i diritti riservati.</span>
        </div>
      </footer>
    </>
  );
};

const app = document.getElementById('app');
if (app) {
  createRoot(app).render(<App />);
}
