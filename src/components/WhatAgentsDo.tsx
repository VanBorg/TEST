import React, { useState } from 'react';
import { Users, Calendar, Settings, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Clock, Sparkles } from 'lucide-react';

const WhatAgentsDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Lead Capture Agent',
      icon: Users,
      description: 'This AI agent handles the entire sign-up process, no human required. It engages visitors, captures lead data, qualifies them with smart logic, and syncs everything directly to your CRM or spreadsheet. Optional quizzes and inquiry flows included.',
      useCase: 'Ideal for fitness coaches, personal trainers, and wellness businesses who want to automate onboarding, eliminate repetitive admin, and stay ahead of the curve.',
      exampleUseCase: 'Collect all client intake info before a personal training consultation, fully automated.',
      techFlow: [
        'Engages new visitors with tailored questions',
        'Qualifies leads using smart logic',
        'Sends data to CRM or spreadsheet',
        'Triggers automated follow-ups',
        '(Optional) Includes quizzes or custom inquiry flows'
      ],
      color: 'from-green-400 to-emerald-500',
      cta: '📩 Automate your lead capture',
      benefits: [
        'Convert traffic into qualified leads 24/7',
        'Automate onboarding, no manual work',
        'Instant CRM or spreadsheet sync',
        'Save hours every week on admin',
        'Works seamlessly with your existing systems'
      ],
      pricingBox: {
        label: '💷 Pricing & Delivery',
        content: [
          'Build cost: £1,500 – £3,000 (one-time)',
          'Monthly: from £150 (license, updates, support)',
          'Delivered in just 7 days —> fully integrated and tested',
          '👉 Click the agent widget (bottom right) and try the "Lead Capture Agent" demo live'
        ]
      },
      deployment: 'Agent is fully created and deployed in under 7 days. Once live, it runs permanently, or until we take it offline.'
    },
    {
  title: 'Booking Agent',
  icon: Calendar,
  description: 'This AI agent handles real-time scheduling with zero manual effort. It shows live availability, lets clients book sessions, syncs with your calendar, sends reminders, and even manages rescheduling, all automatically, 24/7.',
  useCase: 'Ideal for yoga studios, personal trainers, and wellness businesses that want to automate session scheduling for both classes and 1-on-1 consults.',
  exampleUseCase: 'Clients book appointments directly through the chat, with real-time calendar syncing, no back-and-forth.',
  techFlow: [
    'Shows real-time calendar availability',
    'Syncs with Google or Outlook Calendar',
    'Handles rescheduling and reminders',
    'Works 24/7 without human input',
    '(Optional) Separate flows for group vs. private sessions'
  ],
  color: 'from-blue-400 to-cyan-500',
  cta: '📅 Streamline your scheduling',
  benefits: [
    'Automate bookings 24/7 without staff',
    'Eliminate no-shows with smart reminders',
    'Free up trainers to focus on sessions',
    'Clients self-book with live calendar sync',
    'Works with Google and Outlook seamlessly'
  ],
  pricingBox: {
    label: '💷 Pricing & Delivery',
    content: [
      'Build cost: £2,000 – £4,000 (one-time)',
      'Monthly: from £150 (license, updates, support)',
      'Delivered in just 7 days —> fully integrated and tested',
      '👉 Click the agent widget (bottom right) and try the "Booking Agent" demo live'
    ]
  },
  deployment: 'Agent is fully created and deployed in under 7 days. Once live, it runs permanently, or until we take it offline.'
},
    {
      title: 'Custom System',
      icon: Settings,
      description: 'Our most advanced setup — combines Lead Capture, Booking, Support, and any custom logic into a single AI-powered system. It\'s fully integrated with your CRM, forms, calendars, and payment tools — tailored end-to-end for your business.',
      useCase: 'Perfect for multi-location gyms, wellness clinics, and fitness brands that want one powerful system to automate the entire client journey — from first touch to full booking and support.',
      techFlow: [
        'Combines lead capture, bookings, and support flows',
        'Runs on custom backend logic and integrations',
        'Connects to CRMs, payment systems, and intake forms',
        'Tailored to your team, locations, and workflows'
      ],
      cta: '🛠️ Let\'s build your custom AI system',
      benefits: [
        'Automate the full client lifecycle',
        'All-in-one interface for lead gen + booking + support',
        'Manage multiple staff, calendars, and locations',
        'Integrates with Stripe, fitness CRMs, and forms',
        'Custom logic flows built to your exact needs'
      ],
      color: 'from-orange-400 to-red-500',
      pricingBox: {
        label: '💷 Pricing & Delivery',
        content: [
          'Build cost: £2,500 – £10,000 (one-time)',
          'Monthly: from £150 (license, updates, support)',
          'Delivered in 7–10 days —> fully integrated and tested',
          '👉 Click the agent widget (bottom right) and try the "Custom AI System" demo live'
        ]
      },
      deployment: 'Agent is fully created and deployed in 7–10 days. Once live, it runs permanently, or until we take it offline.'
    }
  ];

  return (
    <section id="what-agents-do" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <Settings className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <Zap className="w-12 h-12 text-blue-400 animate-bounce" />
            <Shield className="w-12 h-12 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="font-['Audiowide'] text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Agents
            </span>
          </h2>
          <p className="font-['Roboto_Mono'] text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized AI agents designed for the fitness and wellness industry
          </p>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-col lg:flex-row gap-2 mb-12 p-2 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-xl">
          {/* Light effect behind tabs */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl blur-2xl -z-10"></div>
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 p-4 rounded-xl transition-all duration-500 transform hover:scale-105 group ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} shadow-lg`
                    : 'hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <Icon className={`w-6 h-6 transition-all duration-300 ${
                    activeTab === index ? 'text-black' : 'text-cyan-400 group-hover:text-cyan-300'
                  }`} />
                  <span className={`font-['Audiowide'] font-bold transition-colors duration-300 ${
                    activeTab === index ? 'text-black' : 'text-white'
                  }`}>
                    {tab.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-3xl border border-gray-700/50 backdrop-blur-xl p-8 min-h-[600px] transition-all duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-8">
              <div>
                <h3 className="font-['Audiowide'] text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                  {React.createElement(tabs[activeTab].icon, {
                    className: 'w-8 h-8 text-cyan-400'
                  })}
                  <span>{tabs[activeTab].title}</span>
                </h3>
                <p className="font-['Roboto_Mono'] text-lg text-gray-300 leading-relaxed">
                  {tabs[activeTab].description}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <h4 className="font-['Audiowide'] text-xl font-bold text-cyan-400 mb-3 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Ideal For</span>
                </h4>
                <p className="font-['Roboto_Mono'] text-gray-300 leading-relaxed">
                  {tabs[activeTab].useCase}
                </p>
              </div>

              {/* All-in-One AI Solution card for Custom System */}
              {/* Business Benefits - only for Custom System */}
              {activeTab === 2 && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-green-400 mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Business Benefits</span>
                  </h4>
                  <ul className="space-y-2">
                    {tabs[activeTab].benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="font-['Roboto_Mono'] text-gray-300 text-sm">{benefit}</span>
                      </li>
                    )) || []}
                  </ul>
                </div>
              )}

              {/* Pricing Box - only for Lead Capture Agent */}
              {(activeTab === 0 || activeTab === 1 || activeTab === 2) && tabs[activeTab].pricingBox && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-yellow-400 mb-4 flex items-center space-x-2">
                    <span>{tabs[activeTab].pricingBox.label}</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <div className="font-['Roboto_Mono'] text-yellow-300 font-bold text-lg mb-1">
                        Build cost: {activeTab === 0 ? '£1,500 – £3,000' : activeTab === 1 ? '£2,000 – £4,000' : '£2,500 – £10,000'}
                      </div>
                      <div className="font-['Roboto_Mono'] text-gray-400 text-sm">(one-time investment)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <div className="font-['Roboto_Mono'] text-orange-300 font-bold text-lg mb-1">Monthly: from £150</div>
                      <div className="font-['Roboto_Mono'] text-gray-400 text-sm">(license, updates, support)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="font-['Roboto_Mono'] text-green-300 font-bold text-lg mb-1">
                        Delivered in {activeTab === 2 ? '7–10 days' : 'just 7 days'}
                      </div>
                      <div className="font-['Roboto_Mono'] text-gray-400 text-sm">→ fully integrated and tested</div>
                    </div>
                    <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <div className="font-['Roboto_Mono'] text-cyan-300 font-bold text-base mb-1">👉 Try the Live Demo</div>
                      <div className="font-['Roboto_Mono'] text-gray-400 text-sm">
                        Click the agent widget (bottom right) and try the "{activeTab === 0 ? 'Lead Capture Agent' : activeTab === 1 ? 'Booking Agent' : 'Custom AI System'}" demo live
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>

            {/* Right column */}
            <div>
              <h4 className="font-['Audiowide'] text-2xl font-bold text-white mb-6">How It Works</h4>
              <div className="space-y-4">
                {tabs[activeTab].techFlow.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${tabs[activeTab].color} flex items-center justify-center text-black font-bold font-['Roboto_Mono']`}>
                      {index + 1}
                    </div>
                    <span className="font-['Roboto_Mono'] text-gray-300 group-hover:text-white transition-colors duration-300">
                      {step}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 ml-auto" />
                  </div>
                ))}
              </div>

              {/* All-in-One AI Solution card for Custom System */}
              {activeTab === 2 && (
                <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-orange-500/10 to-red-500/10 border border-orange-500/30 shadow-2xl shadow-orange-500/10">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <h5 className="font-['Audiowide'] text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        All-in-One AI Solution
                      </h5>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 hover:scale-110 transition-transform duration-300 delay-100">
                        <Calendar className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 hover:scale-110 transition-transform duration-300 delay-200">
                        <Settings className="w-8 h-8 text-orange-400" />
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <p className="font-['Roboto_Mono'] text-orange-200 font-medium leading-relaxed">
                        <span className="font-bold text-orange-300">Lead Capture</span> + 
                        <span className="font-bold text-blue-300"> Booking</span> + 
                        <span className="font-bold text-purple-300"> Support</span> = 
                        <span className="font-bold text-white"> Complete Business Automation</span>
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                        <div className="font-['Audiowide'] text-green-400 font-bold text-2xl mb-1">24/7</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-sm font-medium">Operation</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                        <div className="font-['Audiowide'] text-blue-400 font-bold text-2xl mb-1">∞</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-sm font-medium">Scalability</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                        <div className="font-['Audiowide'] text-orange-400 font-bold text-2xl mb-1">100%</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-sm font-medium">Custom</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mini Solution Cards - Lead Capture Agent */}
              {activeTab === 0 && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30 hover:scale-110 transition-transform duration-300 delay-100">
                        <Zap className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 hover:scale-110 transition-transform duration-300 delay-200">
                        <Shield className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                        <div className="font-['Audiowide'] text-cyan-400 font-bold text-lg mb-1">Never</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Miss Leads</div>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <div className="font-['Audiowide'] text-green-400 font-bold text-lg mb-1">Instant</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Qualification</div>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                        <div className="font-['Audiowide'] text-blue-400 font-bold text-lg mb-1">Zero</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Admin Work</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mini Solution Card - Booking Agent */}
              {activeTab === 1 && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform duration-300 delay-100">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 hover:scale-110 transition-transform duration-300 delay-200">
                        <CheckCircle className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <div className="font-['Audiowide'] text-blue-400 font-bold text-lg mb-1">Real-Time</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Availability</div>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                        <div className="font-['Audiowide'] text-cyan-400 font-bold text-lg mb-1">Smart</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Reminders</div>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                        <div className="font-['Audiowide'] text-purple-400 font-bold text-lg mb-1">Instant</div>
                        <div className="font-['Roboto_Mono'] text-gray-300 text-xs font-medium">Booking</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/50">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span className="font-['Audiowide'] text-lg font-bold text-white">Deployment</span>
                </div>
                <p className="font-['Roboto_Mono'] text-gray-300 mb-6">
                  {tabs[activeTab].deployment || 'All agents include full setup, fitness industry training, and 30-day optimization.'}
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full group flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-['Roboto_Mono'] font-bold text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <span>{tabs[activeTab].cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Duplicate Tabs at Bottom */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative flex flex-col lg:flex-row gap-2 mt-12 p-2 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-xl">
        {/* Light effect behind tabs */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl blur-2xl -z-10"></div>
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 p-4 rounded-xl transition-all duration-500 transform hover:scale-105 group ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.color} shadow-lg`
                  : 'hover:bg-gray-800/50'
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                <Icon className={`w-6 h-6 transition-all duration-300 ${
                  activeTab === index ? 'text-black' : 'text-cyan-400 group-hover:text-cyan-300'
                }`} />
                <span className={`font-['Audiowide'] font-bold transition-colors duration-300 ${
                  activeTab === index ? 'text-black' : 'text-white'
                }`}>
                  {tab.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
};


export default WhatAgentsDo