import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
// It's important to use environment variables for storing API keys to keep them secure.
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Replace with your actual API key stored in an environment variable

export const fetchChatGPTResponse = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions', // Updated endpoint as per the latest OpenAI documentation
      {
        model: 'gpt-4', // Use 'gpt-4' or any other specific model identifier provided by OpenAI
        messages: [{ 'role': 'system', 'content': 'You are a helpful assistant.' }, { 'role': 'user', 'content': prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    return response.data.choices[0].message['content'].trim(); // Adjusted according to the new response structure
  } catch (error) {
    console.error('Error fetching ChatGPT response:', error);
    // Handle the error appropriately - you might want to log the error or display a message to the user.
    return 'An error occurred while fetching the response.';
  }
};