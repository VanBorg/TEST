import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, ExternalLink, Building, Hash, Calendar, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const navigateToCalculator = () => {
    navigate('/calculator');
  };

  return (
    <footer className="relative py-20 border-t border-gray-700/50">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-['Audiowide'] text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Van Borg Limited
              </span>
            </div>
            <p className="font-['Roboto_Mono'] text-gray-400 leading-relaxed max-w-lg mb-6">
              Premium AI Agents solutions that drive business growth. 
              We build intelligent agents that convert visitors into customers with cutting-edge technology and exceptional service.
            </p>
            
            {/* Company Registration Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <h4 className="font-['Audiowide'] text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Company Information</span>
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <Hash className="w-4 h-4 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300">Company Number: 16172283</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300">Incorporated: 09 January 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300">Managing Director: Niclas van Borg</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hash className="w-4 h-4 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300">UTR: 2447029944</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Audiowide'] text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <ExternalLink className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Hero', action: () => scrollToSection('hero') },
                { label: 'Calculators', action: navigateToCalculator },
               { label: 'Pricing Calculator', action: navigateToCalculator },
               { label: 'ROI Calculator', action: navigateToCalculator },
                { label: 'Our Agents', action: () => scrollToSection('what-agents-do') },
                { label: 'The 8 AI Flows', action: () => scrollToSection('what-we-create') },
                { label: 'Pricing & Services', action: () => scrollToSection('pricing') },
                { label: 'Contact', action: () => scrollToSection('contact') }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="font-['Roboto_Mono'] text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Audiowide'] text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Contact Details</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-['Roboto_Mono'] text-gray-400 block">info@vanborglimited.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-['Roboto_Mono'] text-gray-400 block">www.vanborg.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-['Roboto_Mono'] text-gray-400 block">+968 9564 7332</span>
                  <span className="font-['Roboto_Mono'] text-gray-500 text-xs">(Oman)</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-['Roboto_Mono'] text-gray-400 block text-sm leading-relaxed">
                    71-75 Shelton Street<br />
                    Covent Garden<br />
                    London WC2H 9JQ<br />
                    United Kingdom
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="font-['Roboto_Mono'] text-gray-400 text-sm mb-2">
                © {currentYear} Van Borg Limited. All rights reserved.
              </p>
              <p className="font-['Roboto_Mono'] text-gray-500 text-xs">
                Registered in England and Wales. Company Number: 16172283
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6">
              <span className="font-['Roboto_Mono'] text-sm text-gray-300">
                Privacy Policy & Terms of Service <span className="text-cyan-400 font-bold">→</span> Agent <span className="text-cyan-400 font-bold">→</span> Documents
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;