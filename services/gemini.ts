
import { GoogleGenAI } from "@google/genai";

const PROMPT = `
Use the person in this uploaded photo as the main subject. 
Transform it into a professional portrait suitable for a bakery or baked goods shop. 
The person should appear warm, friendly, and trustworthy, with a confident yet approachable expression. 
Outfit should be a clean, modern bakery uniform or apron in neutral or pastel tones (cream, beige, soft brown, or light gray).

Background should be a softly lit bakery interior with shelves of fresh bread, pastries, and baked goods, slightly blurred for depth of field. 
Lighting should be warm and natural, highlighting the face clearly with soft shadows.

Style should be realistic and high-resolution, similar to professional branding photography. 
No cartoon effects. Skin texture must look natural. Clean composition.

Camera style: DSLR portrait, shallow depth of field, sharp focus on face, professional studio quality.

Mood: welcoming, artisanal, authentic, small business owner vibe. 
CRITICAL: The person should be naturally holding a beautiful artisanal cake in their hands.
`;

export async function transformToBakerPortrait(base64Image: string, mimeType: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image.split(',')[1], // Remove the data:image/png;base64, prefix
              mimeType: mimeType,
            },
          },
          {
            text: PROMPT,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image was generated in the response.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
