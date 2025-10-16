import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LazySection from './components/LazySection'
import ScrollToTop from './components/ScrollToTop'

// Import service pages
import GoogleRanking from './pages/GoogleRanking';
import AIChatbots from './pages/AIChatbots';
import GoogleAds from './pages/GoogleAds';
import LeadGenFunnels from './pages/LeadGenFunnels';
import SEOWebsite from './pages/SEOWebsite';
import Automations from './pages/Automations';
import Contact from './pages/Contact';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'));
const HowWeWork = lazy(() => import('./components/HowWeWork'));
const TheDifference = lazy(() => import('./components/TheDifference'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/seo-website" element={<SEOWebsite />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/ai-chatbots" element={<AIChatbots />} />
          <Route path="/lead-generation" element={<LeadGenFunnels />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/google-ranking" element={<GoogleRanking />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy routes for backward compatibility */}
          <Route path="/SEOWebsite" element={<SEOWebsite />} />
          <Route path="/GoogleAds" element={<GoogleAds />} />
          <Route path="/AIChatbots" element={<AIChatbots />} />
          <Route path="/LeadGenFunnels" element={<LeadGenFunnels />} />
          <Route path="/Automations" element={<Automations />} />
          <Route path="/GoogleRanking" element={<GoogleRanking />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <LazySection>
                <Suspense fallback={
                  <div className="w-full py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="animate-pulse">
                        <div className="text-center mb-8 sm:mb-12">
                          <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
                          <div className="h-12 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
                          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="bg-gray-100 rounded-xl p-4 h-16"></div>
                            ))}
                          </div>
                          <div className="bg-gray-100 rounded-xl p-6 h-96"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                  <Services />
                </Suspense>
              </LazySection>
              <LazySection>
                <Suspense fallback={
                  <div className="w-full py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="animate-pulse">
                        <div className="text-center mb-8 sm:mb-12">
                          <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
                          <div className="h-12 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
                          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-gray-100 rounded-xl p-6 h-48">
                              <div className="h-6 bg-gray-200 rounded mb-3"></div>
                              <div className="h-4 bg-gray-200 rounded mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                  <HowWeWork />
                </Suspense>
              </LazySection>
              <LazySection>
                <Suspense fallback={
                  <div className="w-full py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="animate-pulse">
                        <div className="text-center mb-8 sm:mb-12">
                          <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
                          <div className="h-12 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
                          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="bg-gray-100 rounded-xl p-6 h-48">
                              <div className="h-8 bg-gray-200 rounded mb-3"></div>
                              <div className="h-4 bg-gray-200 rounded mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                  <TheDifference />
                </Suspense>
              </LazySection>
              <LazySection>
                <Suspense fallback={
                  <div className="w-full py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="animate-pulse">
                        <div className="text-center mb-8 sm:mb-12">
                          <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
                          <div className="h-12 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
                          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                        </div>
                        <div className="space-y-4">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-gray-100 rounded-xl h-16"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                  <FAQSection />
                </Suspense>
              </LazySection>
              <LazySection>
                <Suspense fallback={
                  <div className="w-full py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="animate-pulse">
                        <div className="text-center mb-8 sm:mb-12">
                          <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
                          <div className="h-12 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
                          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="bg-gray-100 rounded-xl h-80"></div>
                          <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl h-32"></div>
                            <div className="bg-gray-100 rounded-xl h-16"></div>
                            <div className="bg-gray-100 rounded-xl h-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                  <ContactSection />
                </Suspense>
              </LazySection>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
