
// src/pages/AIFeatures.jsx
import React, { useState } from 'react';
import { generateContent } from '@/services/aiService';
import  Button  from '@/components/ui/Button';

import { Textarea } from '@/components/ui/textarea';

const AIFeatures = () => {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleGenerateContent = async () => {
    const response = await generateContent(prompt);
    setAiResponse(response);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AI Content Generation</h1>
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your AI prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button onClick={handleGenerateContent}>Generate Content</Button>
        {aiResponse && (
          <div className="mt-4 p-4 bg-card rounded">
            <h2 className="font-bold mb-2">AI Response:</h2>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFeatures;