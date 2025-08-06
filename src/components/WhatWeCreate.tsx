import React, { useState } from 'react';
import { User, FileText, Calculator, Calendar, File, MessageSquare, ClipboardList, HelpCircle, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const WhatWeCreate = () => {
  const [activeFlow, setActiveFlow] = useState(0);

  const flows = [
    {
      title: 'Onboarding Loop',
      icon: User,
      emoji: '🧑‍💼',
      whatItDoes: 'Collects everything you need from a new client in one go — name, email, phone, address (if needed), BMI, fitness goals, preferences, and more. It replaces outdated forms with a smart, AI-driven intake experience that\'s fast, intuitive, and fully hands-off for your team.',
      howItWorks: 'The agent guides users through a personalized intake flow, adapting questions in real time. All data is sent directly to your CRM or inbox — no manual input required.',
      bestCombinedWith: 'Smart FAQ, Document Loop',
      keyBenefits: [
        'Automates intake process completely',
        'Eliminates paperwork and manual data entry',
        'Captures high-quality lead data',
        'Integrates with existing CRM systems'
      ],
      pricing: {
        build: '£1,500+',
        monthly: '£100+'
      },
      color: 'from-blue-400 to-cyan-500'
    },
    {
  title: 'Workout Generation',
  icon: FileText,
  emoji: '📝',
  whatItDoes: 'Matches users to the perfect workout plan based on their preferences — including training experience, equipment access, and how often they want to train. Each plan is pre-built by expert trainers and tailored to fit their input.',
  howItWorks: 'The agent asks targeted questions about goals, experience level, available equipment, and training frequency. Based on these answers, it presents the most suitable pre-designed program directly to the user via email or message.',
  keyBenefits: [
    'Delivers the right workout plan instantly',
    'Eliminates guesswork for new clients',
    'Matches programs to real goals and context',
    'Saves time for both trainers and users'
  ],
  pricing: {
    build: '£800+',
    monthly: '£100+'
  },
  color: 'from-green-400 to-emerald-500'
},
   {
  title: 'Quick Calculator',
  icon: Calculator,
  emoji: '🧮',
  whatItDoes: 'Performs fast and accurate fitness calculations with minimal input. With just a name, email, height, and weight, we can calculate BMI, general protein needs, and daily intake for muscle growth. Need more? We can calculate anything — just provide the formula.',
  howItWorks: 'The agent collects basic data (e.g. height, weight, goal), runs the required calculation instantly, and displays or emails the result. All data is automatically stored in your connected database for future use or tracking.',
  keyBenefits: [
    'Delivers instant results with minimal input',
    'Covers core metrics like BMI and protein intake',
    'Supports any formula you want to use',
    'Saves staff time and boosts credibility'
  ],
  pricing: {
    build: '£500+',
    monthly: '£75+'
  },
  color: 'from-yellow-400 to-orange-500'
},
    {
      title: 'Live Scheduler',
      icon: Calendar,
      emoji: '📅',
      whatItDoes: 'Lets users instantly book sessions, group classes, or consultations through a real-time calendar. It connects with Google/Outlook calendars and can include CRM, reminders, payments, and notifications.',
      howItWorks: 'The agent shows available time slots from your calendar. Once booked, it sends confirmation, reminder messages, and optional follow-ups — all fully automated and synced with your tools.',
      keyBenefits: [
        'Bookings run 24/7 without staff',
        'Works for both 1-on-1 and group classes',
        'Includes reminders and calendar sync',
        'Can integrate payments and CRMs'
      ],
      pricing: {
        build: '£1,500+',
        monthly: '£150+'
      },
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Receive Docs',
      icon: File,
      emoji: '📄',
      whatItDoes: 'Delivers personalized documents — like diet plans, training schedules, or custom PDFs — straight to the user\'s email. The user just selects the type of document they want, and the system builds it automatically based on earlier data.',
      howItWorks: 'The agent asks for the user\'s name, email, and document preference. Based on previous inputs (e.g. BMI, dietary preference), a custom doc is generated and emailed instantly.',
      keyBenefits: [
        'Zero manual document handling',
        'Personalized PDFs in seconds',
        'Great for schedules, diets, guides',
        'Fully branded and automated'
      ],
      pricing: {
        build: '£600+',
        monthly: '£100+'
      },
      color: 'from-indigo-400 to-blue-500'
    },
    {
      title: 'Message Me',
      icon: MessageSquare,
      emoji: '💬',
      whatItDoes: 'Replaces static contact forms with an AI-powered message system. Users answer a few quick questions and the data is sent to your CRM, email, or wherever you want it.',
      howItWorks: 'The agent collects user inputs like name, message, and topic. It either sends it directly to your email or stores it in a database. Optional: AI handles open-form messages too.',
      keyBenefits: [
        'No more boring contact forms',
        'AI fallback handling available',
        'Seamless CRM/email connection',
        'Works 24/7 without staff'
      ],
      pricing: {
        build: '£500+',
        monthly: '£75+'
      },
      color: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Inquiry / Quiz',
      icon: ClipboardList,
      emoji: '📋',
      whatItDoes: 'Collects detailed responses from users — great for lead qualification, surveys, onboarding, or job applications.',
      howItWorks: 'The bot presents a series of smart questions. All responses are stored or sent to a connected tool like Airtable, Notion, or your CRM.',
      keyBenefits: [
        'Powerful data collection',
        'Great for segmenting users',
        'Works for hiring, intake, or surveys',
        'Can branch logic based on answers'
      ],
      pricing: {
        build: '£1,100+',
        monthly: '£100+'
      },
      color: 'from-rose-400 to-red-500'
    },
    {
      title: 'Smart FAQ',
      icon: HelpCircle,
      emoji: '🤖',
      whatItDoes: 'Handles all your FAQs with AI — trained on your knowledge base and built to avoid off-topic answers or hallucinations.',
      howItWorks: 'The agent is connected to your internal documentation, then uses retrieval-augmented generation (RAG) to deliver accurate, brand-safe answers with fallback routing for unclear queries.',
      keyBenefits: [
        'No more repetitive answers',
        'Runs 24/7, never off-brand',
        'Built-in fallback logic',
        'Great for sales and support'
      ],
      pricing: {
        build: '£750+',
        monthly: '£125+'
      },
      color: 'from-orange-400 to-yellow-500'
    }
  ];

  return (
    <section id="what-we-create" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <Calculator className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <FileText className="w-12 h-12 text-blue-400 animate-bounce" />
            <Calendar className="w-12 h-12 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="font-['Audiowide'] text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The 8 AI Flows
            </span>
          </h2>
          <p className="font-['Roboto_Mono'] text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful AI-powered flows that turn basic bots into fully automated business systems — built for performance and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Flow Buttons */}
          <div className="lg:col-span-2 space-y-3">
            {flows.map((flow, index) => {
              const Icon = flow.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFlow(index)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 group ${
                    activeFlow === index
                      ? `border-cyan-500 bg-gradient-to-r ${flow.color} shadow-2xl shadow-cyan-500/20`
                      : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-6 h-6 transition-all duration-300 ${
                      activeFlow === index ? 'text-black' : 'text-cyan-400 group-hover:text-cyan-300'
                    }`} />
                    <span className={`font-['Audiowide'] text-base font-bold transition-colors duration-300 ${
                      activeFlow === index ? 'text-black' : 'text-white'
                    }`}>
                      {flow.title}
                    </span>
                  </div>
                </button>
              );
            })}
            
            {/* Centralized CTA Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full mt-6 group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-['Roboto_Mono'] font-bold text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <span>Get These Flows Built</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* Important Note */}
            <div className="mt-4 p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
              <p className="font-['Roboto_Mono'] text-yellow-400 text-base font-medium text-center leading-relaxed">
                <strong>💡 Note:</strong> These pricing ranges act as guidelines. They reflect how each feature contributes to the overall cost of our Lead Capture or Booking Agents, not standalone purchases.
              </p>
            </div>
          </div>

          {/* Dynamic content area */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 backdrop-blur-xl min-h-[600px] transition-all duration-700">
              <div className="flex items-center space-x-3 mb-6">
                {React.createElement(flows[activeFlow].icon, {
                  className: `w-8 h-8 text-cyan-400`
                })}
                <h3 className="font-['Audiowide'] text-3xl font-bold text-white">
                  {flows[activeFlow].title}
                </h3>
                <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" />
              </div>

              <div className="space-y-6">
                {/* What It Does */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-cyan-400 mb-3">What It Does</h4>
                  <p className="font-['Roboto_Mono'] text-gray-300 leading-relaxed">
                    {flows[activeFlow].whatItDoes}
                  </p>
                </div>

                {/* How It Works */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-orange-400 mb-3">How It Works</h4>
                  <p className="font-['Roboto_Mono'] text-gray-300 leading-relaxed">
                    {flows[activeFlow].howItWorks}
                  </p>
                </div>


                {/* Key Benefits */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-green-400 mb-4">Key Benefits</h4>
                  <ul className="space-y-2">
                    {flows[activeFlow].keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="font-['Roboto_Mono'] text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <h4 className="font-['Audiowide'] text-xl font-bold text-yellow-400 mb-3">Investment Range</h4>
                  <div className="font-['Audiowide'] text-2xl font-bold text-white">
                    <span>Build: {flows[activeFlow].pricing.build}</span><br/><span>Monthly: {flows[activeFlow].pricing.monthly}</span>
                  </div>
                  <p className="font-['Roboto_Mono'] text-gray-400 text-sm mt-2">
                    Final pricing depends on complexity and integrations
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;