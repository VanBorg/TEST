import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const ROICalculator = () => {
  // ROI Calculator states
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(5); // Increased from 2% to 5% for AI bots
  const [averageValue, setAverageValue] = useState(100);
  const [timeSaved, setTimeSaved] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [investmentPeriod, setInvestmentPeriod] = useState(12); // 6, 12, or 24 months
  // Removed efficiencyMultiplier and botType

  // Dynamic pricing based on investment period
  const getSamplePricing = (period: number) => {
    const baseOneTime = 2000;
    const baseMonthly = 150;
    
    switch (period) {
      case 6: // Pilot
        return {
          oneTime: baseOneTime * 0.8, // 20% discount for pilot
          monthly: baseMonthly * 0.9,
          total: (baseOneTime * 0.8) + (baseMonthly * 0.9 * 6)
        };
      case 24: // Enterprise
        return {
          oneTime: baseOneTime * 1.2, // 20% premium for enterprise
          monthly: baseMonthly * 1.1,
          total: (baseOneTime * 1.2) + (baseMonthly * 1.1 * 24)
        };
      default: // 12 months (standard)
        return {
          oneTime: baseOneTime,
          monthly: baseMonthly,
          total: baseOneTime + (baseMonthly * 12)
        };
    }
  };

  const samplePricing = getSamplePricing(investmentPeriod);

  // Simplified calculation logic (no efficiencyMultiplier, no botType)
  const calculateROI = () => {
    const monthlyLeads = ((monthlyVisitors || 0) * (conversionRate || 0)) / 100;
    const monthlyRevenue = monthlyLeads * (averageValue || 0);
    
    // Apply AI efficiency multipliers
    // const adjustedMonthlyRevenue = baseMonthlyRevenue * efficiencyMultiplier * botMultiplier.revenue; // Removed
    const annualRevenue = monthlyRevenue * 12;
    
    // Calculate monthly time savings (consistent with payback calculation)
    const monthlyTimeSavings = ((timeSaved || 0) * (hourlyRate || 0) * 4.33); // Removed botMultiplier.time
    const annualTimeSavings = monthlyTimeSavings * 12;
    
    const totalAnnualValue = annualRevenue + annualTimeSavings;
    
    const totalInvestment = samplePricing.total;
    const roi = ((totalAnnualValue - totalInvestment) / totalInvestment) * 100;
    
    // Use monthly values for payback calculation (consistent timeframe)
    const monthlyValue = monthlyRevenue + monthlyTimeSavings; // Removed adjustedMonthlyRevenue
    const paybackMonths = totalInvestment / monthlyValue;
    
    return {
      monthlyLeads: Math.round(monthlyLeads),
      monthlyRevenue: Math.round(monthlyRevenue),
      annualRevenue: Math.round(annualRevenue),
      monthlyTimeSavings: Math.round(monthlyTimeSavings),
      annualTimeSavings: Math.round(annualTimeSavings),
      totalAnnualValue: Math.round(totalAnnualValue),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="max-w-7xl mx-auto p-12 pb-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/60 border border-gray-700/50 backdrop-blur-xl shadow-2xl shadow-green-500/10">
      {/* Single View Layout - Inputs and Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Input Variables */}
        <div className="lg:col-span-1 space-y-6">
          <h4 className="font-['Audiowide'] text-xl font-bold text-white mb-4">Input Variables</h4>
          
          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Monthly Visitors
            </label>
            <input
              type="number"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Conversion Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(e.target.value === '' ? '' : parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Avg Customer Value (£)
            </label>
            <input
              type="number"
              value={averageValue}
              onChange={(e) => setAverageValue(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            />
            <div className="text-xs text-gray-500 mt-1">Average revenue earned per converted customer.</div>
          </div>

          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Time Saved/Week (hrs)
            </label>
            <input
              type="number"
              value={timeSaved}
              onChange={(e) => setTimeSaved(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Hourly Rate (£)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            />
            <div className="text-xs text-gray-500 mt-1">Value of your time or cost of your team per hour.</div>
          </div>

          <div>
            <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
              Investment Period
            </label>
            <select
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none text-sm"
            >
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>

        {/* Calculations */}
        <div className="lg:col-span-1 space-y-6">
          <h4 className="font-['Audiowide'] text-xl font-bold text-white mb-4">Monthly Calculations</h4>
          
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Monthly Leads</div>
            <div className="font-['Audiowide'] text-xl font-bold text-white">{roiResults.monthlyLeads}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              {monthlyVisitors || 0} × {conversionRate || 0}% = {roiResults.monthlyLeads}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Monthly Revenue (AI Enhanced)</div>
            <div className="font-['Audiowide'] text-xl font-bold text-green-400">£{roiResults.monthlyRevenue.toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              Base: £{Math.round((roiResults.monthlyLeads * (averageValue || 0))).toLocaleString()} × {/* Removed efficiencyMultiplier */}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Monthly Time Savings Value</div>
            <div className="font-['Audiowide'] text-xl font-bold text-purple-400">£{roiResults.monthlyTimeSavings.toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              {timeSaved || 0}hrs × £{hourlyRate || 0} × 4.33 weeks
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Total Monthly Value Created</div>
            <div className="font-['Audiowide'] text-xl font-bold text-orange-400">£{Math.round(roiResults.monthlyRevenue + roiResults.monthlyTimeSavings).toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              Revenue + Time Savings
            </div>
          </div>
        </div>

        {/* ROI Results */}
        <div className="lg:col-span-1 space-y-6">
          <h4 className="font-['Audiowide'] text-xl font-bold text-white mb-4">ROI Analysis</h4>
          
          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Annual Revenue</div>
            <div className="font-['Audiowide'] text-2xl font-bold text-cyan-400">£{roiResults.annualRevenue.toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              £{roiResults.monthlyRevenue.toLocaleString()} × 12 months
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Total Annual Value</div>
            <div className="font-['Audiowide'] text-2xl font-bold text-green-400">£{roiResults.totalAnnualValue.toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              Revenue + Time Savings
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">Investment ({investmentPeriod}mo)</div>
            <div className="font-['Audiowide'] text-xl font-bold text-yellow-400">£{samplePricing.total.toLocaleString()}</div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              Build + {investmentPeriod}mo maintenance
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30">
            <div className="font-['Roboto_Mono'] text-gray-300 text-sm mb-1">ROI</div>
            <div className={`font-['Audiowide'] text-3xl font-bold ${roiResults.roi > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {roiResults.roi > 0 ? '+' : ''}{roiResults.roi}%
            </div>
            <div className="font-['Roboto_Mono'] text-gray-500 text-xs mt-1">
              Payback: {roiResults.paybackMonths} months
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ROICalculator;
