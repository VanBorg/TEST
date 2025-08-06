import React from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import PricingCalculator from './calculators/PricingCalculator';
import ROICalculator from './calculators/ROICalculator';

const Calculators = () => {
  return (
    <section id="calculators" className="min-h-screen flex flex-col justify-center relative pt-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <Calculator className="w-12 h-12 text-cyan-400 animate-bounce" />
            <DollarSign className="w-12 h-12 text-blue-400 animate-pulse" />
            <TrendingUp className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <h2 className="font-['Audiowide'] text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Calculators
            </span>
          </h2>
          <p className="font-['Roboto_Mono'] text-xl text-gray-400 max-w-3xl mx-auto">
            Calculate your exact investment, build timeline, monthly costs, and ROI for premium AI agent solutions
          </p>
        </div>

        <div className="space-y-16">
          {/* Pricing Calculator */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-['Audiowide'] text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Calculator className="w-8 h-8 text-cyan-400" />
                <span>Pricing Calculator</span>
              </h3>
              <p className="font-['Roboto_Mono'] text-gray-400">
                Get exact pricing for your agent build and monthly licensing
              </p>
            </div>
            <PricingCalculator />
          </div>

          {/* ROI Calculator */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-['Audiowide'] text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <span>ROI Calculator</span>
              </h3>
              <p className="font-['Roboto_Mono'] text-gray-400">
                Calculate your return on investment and payback period
              </p>
            </div>
            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;