import React from 'react';
import { Bot, Wrench, ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <Bot className="w-10 h-10 text-cyan-400 animate-bounce" />
            <Wrench className="w-10 h-10 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
            <Shield className="w-10 h-10 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="font-['Audiowide'] text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pricing & Services
            </span>
          </h2>
          <p className="font-['Roboto_Mono'] text-xl text-gray-400 max-w-3xl mx-auto">
            Premium AI solutions with transparent pricing and professional services
          </p>
        </div>

        {/* Agent Development - Side by Side */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Bot className="w-7 h-7 text-cyan-400" />
            <h3 className="font-['Audiowide'] text-3xl font-bold text-white">Agent Development</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Single Bot */}
            <div className="p-8 rounded-3xl border-2 border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="mb-6">
                <h4 className="font-['Audiowide'] text-2xl font-bold text-white mb-2">Single Agent</h4>
                <div className="font-['Audiowide'] text-3xl font-bold text-cyan-400 mb-2">£1,500 – £4,000</div>
                <div className="font-['Roboto_Mono'] text-sm text-gray-400">(One-Time)</div>
                <p className="font-['Roboto_Mono'] text-gray-300 mt-3">Lead Capture OR Booking Agent</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Custom AI training on your business</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Choose lead generation or calendar bookings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Basic flows and integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">30-day optimization period</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Price increases with complexity</span>
                </li>
              </ul>
            </div>

            {/* Custom System */}
            <div className="relative p-8 rounded-3xl border-2 border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-2xl shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center space-x-2">
                  <Star className="w-4 h-4 text-black" />
                  <span className="font-['Roboto_Mono'] font-bold text-black text-sm">MOST POPULAR</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-['Audiowide'] text-2xl font-bold text-white mb-2">Custom System</h4>
                <div className="font-['Audiowide'] text-3xl font-bold text-cyan-400 mb-2">£2,500 – £10,000</div>
                <div className="font-['Roboto_Mono'] text-sm text-gray-400">(One-Time)</div>
                <p className="font-['Roboto_Mono'] text-gray-300 mt-3">Full-stack automation system</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Multiple agents + advanced logic</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Deep integrations (CRM, APIs, payment systems)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">AI dashboards + reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">90-day optimization & fine-tuning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Dedicated success manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button - Under Agent Cards */}
        <div className="text-center mb-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center space-x-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-['Roboto_Mono'] font-bold text-xl text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <span>Contact Us To Get Started</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>


        {/* Maintenance & Service */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Wrench className="w-7 h-7 text-cyan-400" />
            <h3 className="font-['Audiowide'] text-3xl font-bold text-white">Maintenance & Service</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Maintenance Plan */}
            <div className="p-8 rounded-3xl border-2 border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-cyan-500/50 transition-all duration-500">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-['Audiowide'] text-2xl font-bold text-white">Maintenance</h4>
                  <div className="text-right">
                    <div className="font-['Audiowide'] text-3xl font-bold text-cyan-400">£150 – £2,500</div>
                    <div className="font-['Roboto_Mono'] text-sm text-gray-400">/month</div>
                  </div>
                </div>
                <p className="font-['Roboto_Mono'] text-gray-300">Applies to all agents & systems</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Monthly performance optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Security updates and compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">AI model improvements & bug fixes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Pricing based on complexity, usage & SLA</span>
                </li>
              </ul>

              {/* Licensing Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <h5 className="font-['Audiowide'] text-lg font-bold text-yellow-400 mb-2">Licensing Notice</h5>
                <p className="font-['Roboto_Mono'] text-gray-300 text-sm leading-relaxed">
                  All AI flows and automation logic are licensed. 
                  Clients retain branding, data & lead access (frontend), 
                  but backend logic remains managed and secured by us.
                </p>
              </div>
            </div>

            {/* Why Maintenance Matters */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-7 h-7 text-blue-400" />
                <h4 className="font-['Audiowide'] text-2xl font-bold text-white">Why Maintenance Matters</h4>
              </div>
              <p className="font-['Roboto_Mono'] text-gray-300 leading-relaxed mb-6">
                AI agents require ongoing maintenance to ensure top-tier performance, security, and continuous learning from real-world usage. Our maintenance plans ensure you're always ahead:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">🔁</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Regular performance optimization and bug fixes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">🔐</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Security updates and compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">⚡</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">AI model training and conversation improvements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">🧠</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Updates to newer, more powerful AI models (when tested & stable)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">🔄</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Constant refinement to keep systems cutting-edge and industry-leading</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">🔍</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">System audits and usage reviews to spot opportunities for improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400 text-lg">📈</span>
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">Adaptation to new business processes or platform changes (API shifts, CRM updates, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing note */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50">
          <p className="font-['Roboto_Mono'] text-gray-400 text-lg">
            All prices are starting points. Final cost depends on complexity, integrations, and custom requirements.
            <br />
            <span className="text-cyan-400 font-bold">Contact us for a detailed quote tailored to your needs.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;