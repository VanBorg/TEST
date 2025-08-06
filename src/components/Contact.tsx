import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    urgent: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ─────────────────────────────────────────────────────────────
  // ▼ CHANGE THIS to one of your actual Airtable "Mail Status" options
  const MAIL_STATUS_OPTION = 'Pending'; 
  // ─────────────────────────────────────────────────────────────

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const AIRTABLE_BASE_ID = 'appZIPi57hlErjlFQ';
    const AIRTABLE_TABLE_ID = 'tblMWqmHA7K5iUhTu';
    const AIRTABLE_API_KEY =
      'patgBFCdmfaqqefhZ.29585dde9c35c22b1ebff2d9482ac7f0434e181f79d49b85fa7aa91c74b56080';
    const ENDPOINT = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?typecast=true`;

    const payload = {
      records: [
        {
          fields: {
            Name: formData.name,
            Email: formData.email,
            Topic: formData.topic,
            Urgent: formData.urgent,
            Message: formData.message,
            'Mail Status': MAIL_STATUS_OPTION
          }
        }
      ]
    };

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const body = await response.json();
      if (!response.ok) {
        console.error('Airtable rejected:', body);
        throw new Error(
          `Error ${response.status}: ${body.error?.message || 'Check console'}`
        );
      }

      console.log('✅ Contact form submitted successfully');

      setSubmitted(true);
      setFormData({ name: '', email: '', topic: '', urgent: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <MessageSquare className="w-12 h-12 text-cyan-400 animate-bounce" />
            <Calendar className="w-12 h-12 text-blue-400 animate-pulse" />
            <Mail
              className="w-12 h-12 text-cyan-400 animate-spin"
              style={{ animationDuration: '6s' }}
            />
          </div>
          <h2 className="font-['Audiowide'] text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="font-['Roboto_Mono'] text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI agents? Let's discuss
            your project and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="font-['Audiowide'] text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                <MessageSquare className="w-8 h-8 text-cyan-400" />
                <span>Send Us A Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
                      Topic *
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a topic...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Pricing & Quotes">Pricing & Quotes</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Custom Agent Request">
                        Custom Agent Request
                      </option>
                      <option value="Maintenance & Licensing">
                        Maintenance & Licensing
                      </option>
                      <option value="Partnership Opportunity">
                        Partnership Opportunity
                      </option>
                      <option value="Feedback or Suggestion">
                        Feedback or Suggestion
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
                      Urgent *
                    </label>
                    <select
                      name="urgent"
                      value={formData.urgent}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select urgency...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-['Roboto_Mono'] text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-['Roboto_Mono'] focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full group flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-['Roboto_Mono'] font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    submitted
                      ? 'bg-green-500 text-black'
                      : isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Book A Call Header */}
            <div>
              <h3 className="font-['Audiowide'] text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-cyan-400" />
                <span>Book A Call</span>
              </h3>
            </div>

            {/* Calendar Booking */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 shadow-xl">
              <p className="font-['Roboto_Mono'] text-gray-300 mb-6 leading-relaxed">
                Ready to discuss your project? Schedule a free 30-minute
                consultation to explore how AI agents can transform your
                business.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">
                    30-minute consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">
                    One-on-one with our team
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span className="font-['Roboto_Mono'] text-gray-300 text-sm">
                    Custom solution discussion
                  </span>
                </div>
              </div>
              <a
                href="https://calendly.com/vanborglimited/book-a-call-vbl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-['Roboto_Mono'] font-bold text-lg text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Schedule Your Call</span>
              </a>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-green-400" />
                <h4 className="font-['Audiowide'] text-lg font-bold text-white">
                  Response Time
                </h4>
              </div>
              <p className="font-['Roboto_Mono'] text-gray-300 text-sm mb-4">
                We typically respond within 24 hours during business days. For
                urgent matters, please call us directly.
              </p>
              <div className="space-y-2">
                <p className="font-['Roboto_Mono'] text-gray-400 text-xs">
                  <strong className="text-cyan-400">Business Hours:</strong>{' '}
                  Every day, 8:00 AM - 11:00 PM (Oman/Dubai Time)
                </p>
                <p className="font-['Roboto_Mono'] text-gray-400 text-xs">
                  <strong className="text-cyan-400">Emergency Support:</strong>{' '}
                  Critical issues are prioritized and handled within 2-4 hours
                </p>
                <p className="font-['Roboto_Mono'] text-gray-400 text-xs">
                  <strong className="text-cyan-400">Project Quotes:</strong>{' '}
                  Custom pricing estimates delivered within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;