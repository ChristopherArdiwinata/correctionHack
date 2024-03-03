import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();
// interface ImageApiResponse {
//   data: {
//     id: string;
//     object: string;
//     created: number;
//     model: string;
//     url: string; // assuming 'url' is directly under 'data'
//   }[];
// }


// Use environment variables to store API keys securely.
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Make sure to set this in your environment
const OPENAI_API_KEY = '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'; // Make sure to set this in your environment

export const fetchGeneratedImage = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    console.log(response.data); // To verify the response structure
    return response.data; // Assuming this matches the ImageApiResponse interface
  } catch (error) {
    console.error('Error fetching generated image:', error);
    throw new Error('An error occurred while fetching the generated image.');
  }
};