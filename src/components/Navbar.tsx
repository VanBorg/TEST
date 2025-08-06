import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToCalculator = () => {
    navigate('/calculator');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Bot className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:rotate-12 animate-spin" style={{ animationDuration: '8s' }} />
            <span 
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
              className="font-['Audiowide'] text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            >
              Van Borg
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-['Roboto_Mono'] text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Home Page
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={navigateToCalculator}
              className="font-['Roboto_Mono'] text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Calculators
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="font-['Roboto_Mono'] text-sm font-medium px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-cyan-500/20">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={navigateToCalculator}
                className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Calculators
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;