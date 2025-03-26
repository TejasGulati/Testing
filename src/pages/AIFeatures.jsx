import React, { useState, useEffect } from 'react';
import { useAIService } from '@/services/aiService';
import Button from '@/components/ui/Button';
import Textarea from "@/components/ui/textarea"; 

const AIFeatures = () => {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [generationType, setGenerationType] = useState('content');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use the new useAIService hook
  const { 
    initializeAIService, 
    generateContent, 
    analyzeText, 
    generateBusinessModel,
    error: serviceError 
  } = useAIService(import.meta.env.VITE_GEMINI_API_KEY);

  // Initialize AI Service on component mount
  useEffect(() => {
    initializeAIService();
  }, [initializeAIService]);

  // Handle different AI generation types
  const handleGenerateContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let response;
      switch (generationType) {
        case 'content':
          response = await generateContent(prompt);
          break;
        case 'analysis':
          response = await analyzeText(prompt, 'comprehensive');
          break;
        case 'business-model':
          // For business model, we'll use a sample company data
          const companyData = {
            industry: 'Technology',
            aiAdoption: 65,
            primaryAIApplication: 'Customer Support',
            esgScore: 0.8,
            sustainableGrowthIndex: 0.75
          };
          response = await generateBusinessModel(companyData);
          break;
        default:
          response = await generateContent(prompt);
      }

      setAiResponse(JSON.stringify(response, null, 2));
    } catch (err) {
      setError(err.message);
      console.error('AI Generation Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Features</h1>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="flex space-x-4">
          <select 
            value={generationType} 
            onChange={(e) => setGenerationType(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="content">Content Generation</option>
            <option value="analysis">Text Analysis</option>
            <option value="business-model">Business Model</option>
          </select>

          <Textarea
            placeholder={`Enter ${generationType} prompt`}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow"
            disabled={generationType === 'business-model'}
          />
        </div>

        <Button 
          onClick={handleGenerateContent} 
          disabled={loading || (generationType !== 'business-model' && !prompt)}
          className="w-full"
        >
          {loading ? 'Generating...' : 'Generate'}
        </Button>

        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded">
            <p>Error: {error}</p>
          </div>
        )}

        {aiResponse && (
          <div className="mt-4 p-4 bg-gray-100 border rounded">
            <h2 className="font-bold mb-2">AI Response:</h2>
            <pre className="overflow-x-auto text-sm">
              {aiResponse}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFeatures;