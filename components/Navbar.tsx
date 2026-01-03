
import React, { useState } from 'react';
import { SectionId } from '../types';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: SectionId.Home },
    { name: 'Partner', id: SectionId.Partner },
    { name: 'Services', id: SectionId.Services },
    { name: 'AI Expert', id: SectionId.AI },
    { name: 'Governance', id: SectionId.Governance },
    { name: 'Contact', id: SectionId.Contact },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(SectionId.Home)}>
            <Shield className="w-8 h-8 text-cyan-500" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight">JG DEVELOPER</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">North America</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === link.id ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection(SectionId.Contact)}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm font-semibold transition-all shadow-lg shadow-cyan-900/20"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
