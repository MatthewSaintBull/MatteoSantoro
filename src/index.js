import { createRoot } from 'react-dom/client';
import ContactsSection from './components/Contacts';
import HeroSection from './components/Hero';
import InfoSection from './components/Info';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import { motion, useScroll } from "framer-motion"

const handleClick = () => {
  if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: window.pageYOffset + window.innerHeight * 0.5, behavior: 'smooth' });
  }
};


const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="bg-pastel-blue h-20 overflow-hidden justify-center flex shadow-xl fixed w-screen">
        <img src={require('./assets/logo.svg')} alt="website logo" className='h-20 mix-blend-multiply' width={250} height={150} />
      </nav>
      <motion.div className='fixed top-0 left-0 right-0 h-[5px] bg-blue-400 origin-[0%]' style={{ scaleX: scrollYProgress }}>
      </motion.div>

      <div className="min-h-screen bg-gray-200 max-w-7xl mx-auto pt-20" >
        <HeroSection />
        <div className="container mx-auto py-8 px-5 md:px-0">
          <InfoSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactsSection />
        </div>

        <footer className="fixed bottom-0 left-0 right-0 bg-transparent p-4 flex justify-end">
          <button className="bg-pastel-blue text-gray-900 px-4 py-2 rounded-md shadow" onClick={handleClick}>Scorri</button>
        </footer>
      </div>
    </>
  )
}
createRoot(app).render(
  <App></App>
);