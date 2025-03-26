
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Generation Error:", error);
    return null;
  }
};

// Custom AI hook
export const useAI = () => {
  const [aiResponse, setAiResponse] = useState(null);
  
  const generateAIResponse = async (prompt) => {
    const response = await generateContent(prompt);
    setAiResponse(response);
    return response;
  };

  return { aiResponse, generateAIResponse };
};
