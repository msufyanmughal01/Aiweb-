
const { GoogleGenerativeAI , HarmCategory,
  HarmBlockThreshold } = require("@google/generative-ai");
  // Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
export default async function Helo(){
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
}
const prompt = "Write a story about a magic backpack."

const result = await model.generateContent(prompt,{
  generationConfig,
});
const response = await result.response.text()
console.log(response)
}