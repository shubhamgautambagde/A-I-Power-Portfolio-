
import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_DATA_FOR_AI } from '../constants';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI Chatbot will not function.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const systemInstruction = `You are ShubhamAI, a friendly and professional AI assistant for Shubham Bagde's portfolio website. Your purpose is to answer questions about Shubham's skills, projects, and professional experience based ONLY on the information provided below. Do not invent any information. If a question is outside this scope (e.g., personal questions, general knowledge), politely decline and steer the conversation back to Shubham's professional life. Keep your answers concise and helpful.

Here is the information about Shubham Bagde:
${PORTFOLIO_DATA_FOR_AI}
`;

let chat: Chat | null = null;

const initializeChat = (): Chat => {
  if (!process.env.API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
  });
};

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    if (!chat) {
      chat = initializeChat();
    }
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    chat = null; // Reset chat on error
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};