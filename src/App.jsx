import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIFeatures from './pages/AIFeatures';
import Chatbot from './pages/Chatbot';
import Navigation from './components/Navigation';
import TawkChatbot from './components/Chatbot/TawkChatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-features" element={<AIFeatures />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
        <TawkChatbot />
      </div>
    </Router>
  );
}

export default App;