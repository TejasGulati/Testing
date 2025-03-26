import { useState, useCallback } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuration for different AI models and capabilities
const AI_MODELS = {
  TEXT_GENERATION: 'gemini-1.5-pro-latest',
  MULTI_MODAL: 'gemini-1.5-pro-latest',
  ANALYSIS: 'gemini-1.5-pro-latest'
};

// Custom error class for better error handling
class AIServiceError extends Error {
  constructor(message, type = 'GenerationError') {
    super(message);
    this.name = type;
  }
}

/**
 * AI Service Class for advanced AI interactions
 */
class AIService {
  constructor(apiKey) {
    if (!apiKey) {
      throw new AIServiceError('API Key is required', 'ConfigurationError');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  /**
   * Generate text content with advanced configuration
   * @param {string} prompt - Input prompt for generation
   * @param {Object} options - Additional generation options
   * @returns {Promise<string>} Generated text
   */
  async generateContent(prompt, options = {}) {
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: options.model || AI_MODELS.TEXT_GENERATION,
        generationConfig: {
          maxOutputTokens: options.maxTokens || 1000,
          temperature: options.temperature || 0.7,
          topP: options.topP || 0.9,
          topK: options.topK || 40
        }
      });

      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('AI Generation Error:', error);
      throw new AIServiceError(`Content generation failed: ${error.message}`);
    }
  }

  /**
   * Analyze and extract insights from text
   * @param {string} text - Text to analyze
   * @param {string} analysisType - Type of analysis
   * @returns {Promise<Object>} Analysis results
   */
  async analyzeText(text, analysisType = 'comprehensive') {
    const analysisPrompts = {
      comprehensive: `Perform a comprehensive analysis of the following text. 
        Provide insights on:
        1. Key themes
        2. Sentiment
        3. Complexity
        4. Potential implications
        
        Text: ${text}`,
      
      sustainability: `Analyze the text from a sustainability perspective:
        1. Identify sustainability-related keywords
        2. Assess environmental impact statements
        3. Rate the sustainability consciousness
        
        Text: ${text}`,
      
      businessInsights: `Extract business and innovation insights from the text:
        1. Potential business opportunities
        2. Innovation indicators
        3. Market trend signals
        
        Text: ${text}`
    };

    try {
      const analysisPrompt = analysisPrompts[analysisType] || analysisPrompts.comprehensive;
      const analysis = await this.generateContent(analysisPrompt);
      return {
        type: analysisType,
        insights: analysis
      };
    } catch (error) {
      console.error('Text Analysis Error:', error);
      throw new AIServiceError(`Text analysis failed: ${error.message}`);
    }
  }

  /**
   * Generate a creative business model using AI
   * @param {Object} companyData - Company information
   * @returns {Promise<Object>} Generated business model
   */
  async generateBusinessModel(companyData) {
    const prompt = `Generate an innovative, AI-driven business model for a company with these characteristics:
      - Industry: ${companyData.industry}
      - Current AI Adoption: ${companyData.aiAdoption}%
      - Primary AI Application: ${companyData.primaryAIApplication}
      - ESG Score: ${companyData.esgScore}
      - Sustainable Growth Index: ${companyData.sustainableGrowthIndex}

      Focus on:
      - Leveraging generative AI technologies
      - Disrupting traditional industry practices
      - Aligning with ESG objectives
      - Creating sustainable revenue streams
      - Improving efficiency through AI`;

    try {
      const businessModelText = await this.generateContent(prompt);
      return this.parseBusinessModel(businessModelText);
    } catch (error) {
      console.error('Business Model Generation Error:', error);
      throw new AIServiceError(`Business model generation failed: ${error.message}`);
    }
  }

  /**
   * Parse generated business model text into structured format
   * @param {string} modelText - Generated business model text
   * @returns {Object} Structured business model
   */
  parseBusinessModel(modelText) {
    // Simple parsing logic (can be enhanced with more sophisticated NLP)
    return {
      valueProposition: this.extractSection(modelText, 'Value Proposition'),
      keyActivities: this.extractList(modelText, 'Key Activities'),
      revenueStreams: this.extractList(modelText, 'Revenue Streams'),
      sustainabilityImpact: this.extractSection(modelText, 'Sustainability Impact'),
      aiIntegration: this.extractSection(modelText, 'AI Integration')
    };
  }

  // Utility methods for parsing
  extractSection(text, sectionName) {
    const regex = new RegExp(`${sectionName}:(.+?)(?:\n\n|\n[A-Za-z]+:)`, 's');
    const match = text.match(regex);
    return match ? match[1].trim() : 'Not specified';
  }

  extractList(text, listName) {
    const regex = new RegExp(`${listName}:(.+?)(?:\n\n|\n[A-Za-z]+:)`, 's');
    const match = text.match(regex);
    return match 
      ? match[1].split('\n').map(item => item.trim()).filter(item => item)
      : [];
  }
}

/**
 * React Hook for AI Service
 * @param {string} apiKey - Google Gemini API Key
 * @returns {Object} AI service methods and state
 */
export const useAIService = (apiKey) => {
  const [aiService, setAIService] = useState(null);
  const [error, setError] = useState(null);

  // Initialize AI Service
  const initializeAIService = useCallback(() => {
    try {
      const service = new AIService(apiKey);
      setAIService(service);
      setError(null);
    } catch (err) {
      setError(err);
      console.error('AI Service Initialization Error:', err);
    }
  }, [apiKey]);

  // Wrapper methods for AI service functions
  const generateContent = useCallback(async (prompt, options) => {
    if (!aiService) {
      throw new AIServiceError('AI Service not initialized');
    }
    return aiService.generateContent(prompt, options);
  }, [aiService]);

  const analyzeText = useCallback(async (text, analysisType) => {
    if (!aiService) {
      throw new AIServiceError('AI Service not initialized');
    }
    return aiService.analyzeText(text, analysisType);
  }, [aiService]);

  const generateBusinessModel = useCallback(async (companyData) => {
    if (!aiService) {
      throw new AIServiceError('AI Service not initialized');
    }
    return aiService.generateBusinessModel(companyData);
  }, [aiService]);

  return {
    aiService,
    error,
    initializeAIService,
    generateContent,
    analyzeText,
    generateBusinessModel
  };
};

export default AIService;