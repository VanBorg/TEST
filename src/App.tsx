import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Calculator from './pages/Calculator';

// Add TypeScript declarations for the agent
declare global {
  interface Window {
    VG_CONFIG: any;
  }
}

function App() {
  useEffect(() => {
    // Prevent double injection
    if (document.getElementById('VG_OVERLAY_CONTAINER')) return;

    // Create the container div
    const container = document.createElement('div');
    container.id = 'VG_OVERLAY_CONTAINER';
    container.style.width = '0';
    container.style.height = '0';
    document.body.appendChild(container);

    // Set the config
    window.VG_CONFIG = {
      ID: 'zUvJRgdCLaNNCFgcFApy',
      region: 'na',
      render: 'bottom-right',
      modalMode: true,
      stylesheets: [
        'https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css',
      ],
    };

    // Inject the script if not already present
    if (!document.getElementById('VG_SCRIPT')) {
      const script = document.createElement('script');
      script.id = 'VG_SCRIPT';
      script.src = 'https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;