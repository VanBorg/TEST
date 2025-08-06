import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatAgentsDo from '../components/WhatAgentsDo';
import WhatWeCreate from '../components/WhatWeCreate';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden relative">
      {/* Global floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Section Divider */}
        <div className="flex items-center justify-center py-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
        
        <WhatAgentsDo />
        
        {/* Section Divider */}
        <div className="flex items-center justify-center py-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
        
        <WhatWeCreate />
        
        {/* Section Divider */}
        <div className="flex items-center justify-center py-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
        
        <Pricing />
        
        {/* Section Divider */}
        <div className="flex items-center justify-center py-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;