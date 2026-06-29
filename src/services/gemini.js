import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateCoverLetter(
  name,
  jobRole,
  company,
  skills,
  resumeText
) {
  const prompt = `
Write a professional cover letter.

Candidate Name: ${name}

Job Role: ${jobRole}

Target Company: ${company}

Skills:
${skills}

Resume:
${resumeText}

The letter should be around 250 words.
Do not use markdown.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}