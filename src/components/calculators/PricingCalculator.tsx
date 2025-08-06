import React, { useState } from 'react'
import {
  Bot,
  Zap,
  DollarSign,
  Clock,
  Calendar,
  Mail,
  X,
  Send,
  Shield,
  CheckCircle
} from 'lucide-react'

// Airtable config
const AIRTABLE_BASE_ID   = 'appZIPi57hlErjlFQ'
const AIRTABLE_TABLE_ID  = 'tblG5IlMoKNZt3DBX'
const AIRTABLE_ENDPOINT  = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`
const AIRTABLE_TOKEN     = 'Bearer patgBFCdmfaqqefhZ.29585dde9c35c22b1ebff2d9482ac7f0434e181f79d49b85fa7aa91c74b56080'

// Use field IDs so renaming in UI won't break your code
const FIELD_IDS = {
  NAME:            'fldr61WjbEVAmX9bm',
  EMAIL:           'fld0YNyzuXOWmXGI2',
  SELECTED_BOT:    'fldpL72tmKDejPUuJ',
  SELECTED_FLOWS:  'fldSy8V2cnQVOwRmg',
  ONE_TIME_COST:   'fld7XmmMfRZmw9xBK',
  MONTHLY_COST:    'fldn29Zl6ngDiSRAp',
  TIMELINE_DAYS:   'fld37REUiTqX0lvPJ',
  SUBMISSION_DATE: 'fldeLHUepwBvD6GUS',
  MAIL_SENT:       'fldNmLIIMeJBSZnSw',
} as const

// Bot options
const agents = {
  leadCapture: {
    name:        'Lead Capture Agent',
    price:       1500,
    description: 'Engages visitors and qualifies leads automatically',
  },
  bookingAgent: {
    name:        'Booking Agent',
    price:       2000,
    description: 'Handles scheduling and calendar management 24/7',
  },
  custom: {
    name:        'Custom System',
    price:       2500,
    description: 'Full-stack automation system with multiple bots',
  },
}
type BotKey = keyof typeof agents

// Flow options
const flows = {
  onboarding: { name: 'Onboarding Loop',   price: 1500, days: 2 },
  workout:    { name: 'Workout Generation', price: 800, days: 1 },
  calculator: { name: 'Quick Calculator',   price: 500, days: 1 },
  scheduler:  { name: 'Live Scheduler',     price: 1500, days: 2 },
  documents:  { name: 'Receive Docs',       price: 600, days: 1 },
  message:    { name: 'Message Me',         price: 500, days: 1 },
  inquiry:    { name: 'Inquiry / Quiz',     price: 1100, days: 2 },
  faq:        { name: 'Smart FAQ',          price: 750, days: 3 },
}
type FlowKey = keyof typeof flows

export default function PricingCalculator() {
  // selection state
  const [selectedBot,   setSelectedBot]   = useState<BotKey>('leadCapture')
  const [selectedFlows, setSelectedFlows] = useState<FlowKey[]>([])

  // email form state
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailFormData, setEmailFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting]   = useState(false)
  const [submitted,     setSubmitted]     = useState(false)

  // pricing calc
  const calculateTotal = () => {
    const botPrice   = agents[selectedBot].price
    const flowsPrice = selectedFlows.reduce((sum, key) => sum + flows[key].price, 0)
    return { oneTime: botPrice + flowsPrice, monthly: 150 }
  }

  // timeline calc
  const calculateTimeline = () => {
    const baseDays = selectedBot === 'custom' ? 10 : 7
    const flowDays = selectedFlows.reduce((sum, key) => sum + flows[key].days, 0)
    return baseDays + flowDays
  }

  const pricing = calculateTotal()

  // toggle a flow on/off
  const toggleFlow = (key: FlowKey) =>
    setSelectedFlows(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )

  // handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailFormData(prev => ({ ...prev, [name]: value }))
  }

  // submit to Airtable
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // build Airtable fields with IDs
    const fields = {
      [FIELD_IDS.NAME]:            emailFormData.name || 'Not provided',
      [FIELD_IDS.EMAIL]:           emailFormData.email,
      [FIELD_IDS.SELECTED_BOT]:    agents[selectedBot].name,
      [FIELD_IDS.SELECTED_FLOWS]:  selectedFlows.map(k => flows[k].name).join(', '),
      [FIELD_IDS.ONE_TIME_COST]:   pricing.oneTime.toString(),
      [FIELD_IDS.MONTHLY_COST]:    pricing.monthly.toString(),
      [FIELD_IDS.TIMELINE_DAYS]:   calculateTimeline().toString(),
      [FIELD_IDS.SUBMISSION_DATE]: new Date().toISOString(),
      [FIELD_IDS.MAIL_SENT]:       'No',
    }

    console.log('📤 Sending to Airtable fields:', fields)

    try {
      const res = await fetch(`${AIRTABLE_ENDPOINT}`, {
        method:  'POST',
        headers: {
          Authorization: AIRTABLE_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records: [{ fields }] }),
      })
      const json = await res.json()
      if (!res.ok) {
        console.error('❌ Airtable Error:', json)
        throw new Error(json.error?.message || 'Unknown Airtable error')
      }
      console.log('✅ Airtable response:', json)
      setSubmitted(true)
      setShowEmailForm(false)
      
      // Show success popup
      // No popup - button will show success state
    } catch (err) {
      console.error('❌ Submit failed:', err)
      alert('❌ Failed to send email. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitted(false)
        setEmailFormData({ name: '', email: '' })
      }, 3000)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/60 border border-gray-700/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
      {/* BOT & MAINTENANCE */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-12">
          {/* Agents */}
          <div>
            <h4 className="flex items-center text-2xl font-bold text-white mb-8">
              <Bot className="w-7 h-7 text-cyan-400 mr-3"/> Choose Your Agent
            </h4>
            <div className="space-y-6">
              {Object.entries(agents).map(([key, bot]) => (
                <button
                  key={key}
                  onClick={() => setSelectedBot(key as BotKey)}
                  className={`w-full p-8 rounded-2xl border-2 text-left transition-transform ${
                    selectedBot === key
                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 shadow-xl'
                      : 'border-gray-700 bg-gray-800/30 hover:border-cyan-500/50 hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-white">{bot.name}</h5>
                      <p className="text-gray-300 text-sm">{bot.description}</p>
                    </div>
                    <div className="text-cyan-400 font-bold text-2xl">£{bot.price}+</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center text-2xl font-bold text-white mb-8">
              <Shield className="w-7 h-7 text-cyan-400 mr-3"/> Licensing & Maintenance (Required)
            </h4>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
              <div className="mb-4">
                <div className="text-xl font-bold text-white mb-2">Monthly Licensing Fee</div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">£150 – £2,500</div>
                <p className="text-gray-400 text-sm">/month (based on complexity & usage)</p>
              </div>
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
                <p className="text-red-300 text-sm">
                  <strong>Continuous payment required to keep agent online.</strong> Stopping payments results in immediate deactivation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI FLOWS */}
        <div>
          <h4 className="flex items-center text-2xl font-bold text-white mb-8">
            <Zap className="w-7 h-7 text-cyan-400 mr-3"/> Select AI Flows
          </h4>
          <div className="grid gap-4">
            {Object.entries(flows).map(([key, flow]) => (
              <button
                key={key}
                onClick={() => toggleFlow(key as FlowKey)}
                className={`w-full p-6 rounded-xl border-2 text-left transition-transform ${
                  selectedFlows.includes(key as FlowKey)
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 shadow-lg'
                    : 'border-gray-700 bg-gray-800/40 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className={`w-4 h-4 ${
                        selectedFlows.includes(key as FlowKey)
                          ? 'text-cyan-400'
                          : 'text-gray-600'
                      }`}
                    />
                    <span className="font-bold text-white">{flow.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-cyan-400">£{flow.price}</span>
                    <span className="text-gray-400 text-sm">{flow.days}d</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-yellow-400 text-sm">
              <strong>Required:</strong> All AI flows & automation logic are licensed. Maintenance ensures security & updates.
            </p>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="p-5 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-center">
          <div className="flex justify-center space-x-2 mb-3">
            <span className="text-cyan-400 text-xl">£</span>
            <span className="font-bold text-white">One-Time Build</span>
          </div>
          <div className="text-3xl font-bold text-cyan-400">£{pricing.oneTime}</div>
          <p className="text-gray-400 text-sm mt-2">Agent + Flows</p>
        </div>
        <div className="p-5 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-center">
          <div className="flex justify-center space-x-2 mb-3">
            <span className="text-blue-400 text-xl">£</span>
            <span className="font-bold text-white">Monthly</span>
          </div>
          <div className="text-3xl font-bold text-blue-400">£{pricing.monthly}+</div>
          <p className="text-gray-400 text-sm mt-2">Starting Monthly Fee</p>
        </div>
        <div className="p-5 rounded-2xl bg-green-500/20 border border-green-500/30 text-center">
          <div className="flex justify-center space-x-2 mb-3">
            <Clock className="text-green-400"/> 
            <span className="font-bold text-white">Timeline</span>
          </div>
          <div className="text-3xl font-bold text-green-400">{calculateTimeline()}</div>
          <p className="text-gray-400 text-sm mt-2">Days to Build</p>
        </div>
        <div className="p-5 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-center">
          <div className="flex justify-center space-x-2 mb-3">
            <Calendar className="text-orange-400"/> 
            <span className="font-bold text-white">Breakdown</span>
          </div>
          <div className="space-y-2 text-left h-20 overflow-y-auto">
            <p className="text-gray-300 text-sm">{agents[selectedBot].name}: {selectedBot === 'custom' ? 10 : 7}d</p>
            {selectedFlows.map(k => (
              <p key={k} className="text-blue-400 text-sm">
                + {flows[k].name}: {flows[k].days}d
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Want a copy of your estimate?</p>
          <button
            onClick={() => setShowEmailForm(true)}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-full font-bold hover:scale-105 transition ${
              submitted 
                ? 'bg-green-500 text-black' 
                : 'bg-cyan-500 text-black'
            }`}
          >
            {submitted ? (
              <>
                <CheckCircle className="mr-2"/> Sent
              </>
            ) : (
              <>
                <Mail className="mr-2"/> Send Results to My Email
              </>
            )}
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Need help or custom pricing?</p>
          <button
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="w-full px-6 py-3 border-2 border-cyan-500 rounded-full font-bold text-cyan-400 hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* EMAIL FORM */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/80 flex items-end justify-center p-4 pb-32 z-50">
          <div className="bg-gray-900 rounded-3xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowEmailForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6"/>
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Your Results</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={emailFormData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-xl text-white"
              />
              <input
                type="email"
                name="email"
                value={emailFormData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-xl text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-full font-bold transition ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300'
                    : 'bg-cyan-500 hover:scale-105'
                }`}
              >
                {isSubmitting
                  ? 'Sending...'
                  : <>
                      <Send className="mr-2"/> Send It
                    </>}
              </button>
            </form>
            {submitted && (
              <p className="text-green-400 text-center mt-4">✔️ Sent! Check your inbox.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}