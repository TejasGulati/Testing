
// src/pages/Chatbot.jsx
import React from 'react';
import TawkChatbot from '@/components/Chatbot/TawkChatbot';

const Chatbot = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Chatbot Integration</h1>
      <p>Our AI-powered chatbot is ready to assist you!</p>
      <TawkChatbot />
    </div>
  );
};

export default Chatbot;