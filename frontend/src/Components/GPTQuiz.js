import React, { useState, useEffect } from 'react';
import { fetchChatGPTResponse } from '../Services/ChatAPI';
import { fetchGeneratedImage } from '../Services/ImageAPI';

// // Define the interface for the question response
// interface AnswerOption {
//   isCorrectAnswer: boolean;
//   answerContent: string;
//   imageUrl?: string; // This will hold the generated image URL for each answer
// }

// interface QuestionResponse {
//   wordedQuestionString: string;
//   possibleAnswers: AnswerOption[];
//   modelableWithImage: boolean; // Determines if images should be generated for the answers
// }

export const ChatComponent = () => {
  const [questionResponse, setQuestionResponse] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = async () => {
    setLoading(true);
    const generationPrompt = `Please generate a multiple choice question about computer science with one correct answer in the following format (it is very important that the response you give me ONLY adheres to the following format as I will be using the response directly to parse as data, so don't say anythign else just adhere to the following format): 
    {
      "wordedQuestionString": "What is a correct question?",
      "possibleAnswers": [
        {"isCorrectAnswer": false, "answerContent": "Answer 1"},
        {"isCorrectAnswer": false, "answerContent": "Answer 2"},
        {"isCorrectAnswer": true, "answerContent": "Answer 3"},
        {"isCorrectAnswer": false, "answerContent": "Answer 4"}
      ],
      "modelableWithImage": true //(if you think that the options are better off being shown as an image indicate there here)
    }`;

    try {
      const chatResponse = await fetchChatGPTResponse(generationPrompt);
      let formattedResponse = JSON.parse(chatResponse); // Parse the GPT-3 response


      if (formattedResponse.modelableWithImage) {
        // Fetch images for each answer option
        const imagePromises = formattedResponse.possibleAnswers.map(answer =>
          fetchGeneratedImage(answer.answerContent) // This should return a promise
        );
        const imageResponses = await Promise.all(imagePromises);

        // Update answer options with the image URLs
        formattedResponse.possibleAnswers.forEach((answer, index) => {
          // Access the 'url' property from the nested data structure
          answer.imageUrl = imageResponses[index].data[0].url; // Assuming each response has a 'data' field that is an array of objects with a 'url' property
        });
      }

      setQuestionResponse(formattedResponse); // Set the new state with images
      setSelectedAnswers(new Array(formattedResponse.possibleAnswers.length).fill(false));
    } catch (error) {
      console.error('Error generating question:', error);
      // Handle errors appropriately
    }
    setLoading(false); // End loading
  };

  const handleAnswerClick = (index) => {
    // Set the selected answer and its correctness
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = !updatedSelectedAnswers[index];
    setSelectedAnswers(updatedSelectedAnswers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <button onClick={generateQuestion} style={{
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        margin: '20px 0',
      }}>
        Generate Question
      </button>
      {questionResponse && (
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p style={{
            background: '#f4f4f4',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}>
            {questionResponse.wordedQuestionString}
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {questionResponse.possibleAnswers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswerClick(index)} style={{
                cursor: 'pointer',
                background: selectedAnswers[index] ? '#e9ecef' : '',
                padding: '10px 15px',
                margin: '5px 0',
                borderRadius: '8px',
                border: '1px solid #ddd',
                textDecoration: selectedAnswers[index] ? 'none' : 'none',
                position: 'relative',
              }}>
                {answer.imageUrl ? (
                  <img src={answer.imageUrl} alt="Answer option" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                ) : null}
                {answer.answerContent}
                {selectedAnswers[index] && (
                  <span style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1.5rem',
                    color: answer.isCorrectAnswer ? 'green' : 'red',
                  }}>
                    {answer.isCorrectAnswer ? "✅" : "❌"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// export default ChatComponent;