import { GoogleGenAI } from "@google/genai";
import { Character } from "../types";

// We use a singleton pattern or direct instantiation in components for the client.
// Since the prompt instructs to use process.env.API_KEY, we assume it's available.
// However, for a client-side demo without a backend, we might need the user to input it
// if process.env isn't actually populated by the build tool.

export const generateCharacterAnalysis = async (character: Character, apiKey: string): Promise<string> => {
  if (!apiKey) throw new Error("API Key is required");

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Jsi literární analytik. Na základě následujícího popisu postavy z knihy "ATUM - Přítel" (autor Jan Hlavsa)
    vygeneruj hlubší psychologický rozbor (maximálně 3 odstavce).
    
    Postava: ${character.name} (${character.nickname || ''})
    Role: ${character.role}
    Vzhled: ${character.appearance}
    Povaha: ${character.personality}
    Popis: ${character.description}
    
    Zaměř se na jejich motivace, skryté strachy a potenciální vývoj v příběhu. Odpovídej česky.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Nepodařilo se vygenerovat analýzu.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};