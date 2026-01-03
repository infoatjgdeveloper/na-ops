
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partnership from './components/Partnership';
import Governance from './components/Governance';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section as SectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activeSection={activeSection} />
      <main>
        <div id={SectionId.Home}>
          <Hero />
        </div>
        <div id={SectionId.Partner}>
          <Partnership />
        </div>
        <div id={SectionId.Services}>
          <Services />
        </div>
        <div id={SectionId.Governance}>
          <Governance />
        </div>
        <div id={SectionId.AI} className="py-20 bg-slate-900/50">
          <AIConsultant />
        </div>
        <div id={SectionId.Contact}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
