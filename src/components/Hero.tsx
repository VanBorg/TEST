import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Settings, MessageSquare } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    'Booking Agents',
    'Lead Capture Agent', 
    '24/7 FAQ Assistant',
    'AI Powered Flows'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-12 mb-16">
          {/* Specializing Text and Rotating Text */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            {/* Powering Growth With - above rotating text */}
            <div className="font-['Roboto_Mono'] text-lg md:text-2xl font-medium text-gray-400">
              Powering Growth With
            </div>
            
            {/* Rotating text - below */}
            <div>
              <span 
                key={currentText}
                className="font-['Audiowide'] text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 animate-pulse"
              >
                {rotatingTexts[currentText]}
              </span>
            </div>
          </div>

          {/* Merged Subtext */}
          <p className="font-['Roboto_Mono'] text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
           Automate growth in Sport & Wellness. AI Agents that convert leads, handle bookings, and run your front desk for you.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-['Roboto_Mono'] font-bold text-lg text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <span className="flex items-center space-x-2">
              <span>📩 Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </button>

          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-12 py-4 border-2 border-cyan-500/50 rounded-full font-['Roboto_Mono'] font-bold text-lg text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="group-hover:text-cyan-300 transition-colors duration-300">💰 View Pricing</span>
          </button>
        </div>

        {/* Agent CTA */}
        <div className="mt-12 mb-8">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-xl">
            <div className="text-center">
              <p className="font-['Roboto_Mono'] text-lg text-white leading-relaxed">
                <span className="text-2xl mr-2">👉</span>
                <span className="font-bold text-cyan-400">Try the agent in the bottom-right corner.</span>
                <span className="text-gray-300"> Explore our Lead Capture Agent, Booking Agent, and examples of custom AI flows we can build for your business.</span>
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Sub-second response times' },
            { icon: Settings, title: 'Fully Customizable', desc: 'Every flow tailored to your business' },
            { icon: MessageSquare, title: 'Natural Chat', desc: 'Human-like conversations' }
          ].map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
              </div>
              <h3 className="font-['Audiowide'] text-xl font-bold text-white mb-2">{title}</h3>
              <p className="font-['Roboto_Mono'] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;