
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCareerAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are Funngro's Teenlancer Advisor. Your goal is to help teenagers (aged 13-19) find the best freelancing gigs based on their interests. Keep responses encouraging, brief, and structured with bullet points. Suggest roles like Content Writing, Social Media Management, Graphic Design, or Data Entry.",
      },
    });
    return response.text || "I'm having trouble thinking right now. Try asking about content writing or design!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI advisor. Please try again later.";
  }
};