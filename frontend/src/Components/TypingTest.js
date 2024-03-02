import React, { useState, useEffect, useRef } from 'react';
const quoteAPI = 'http://api.quotable.io/random';

export const TypingTest = () => {
  // const [state, setState] = useState({
  //   textToType: '',
  //   typedText: '',
  //   timeLeft: 60,
  //   mistakes: 0,
  //   wpm: 0,
  // });

  // const fetchQuote = async () => {
  //   const response = await fetch(quoteAPI);
  //   const data = await response.json();
  //   setState((prevState) => ({
  //     ...prevState,
  //     textToType: data.content,
  //   }));
  // };

  // const resetGame = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     typedText: '',
  //     timeLeft: 60,
  //     mistakes: 0,
  //     wpm: 0,
  //     cpm: 0,
  //   }));
  //   fetchQuote();
  // }
  // const [text, setText] = useState('');
  // const [inputValue, setInputValue] = useState('');
  // const [timeLeft, setTimeLeft] = useState(60);
  // const [charIndex, setCharIndex] = useState(0);
  // const [mistakes, setMistakes] = useState(0);
  // const [isTyping, setIsTyping] = useState(false);
  // const timerRef = useRef(null);
  // type Timer = ReturnType<typeof setInterval>;

  // const loadParagraph = () => {
  //   const ranIndex = Math.floor(Math.random() * paragraphs.length);
  //   setText(paragraphs[ranIndex]);
  //   setCharIndex(0);
  // };

  // const initTyping = (e) => {
  //   const characters = text.split('');
  //   const typedChar = e.target.value.split('')[charIndex];
  //   if (charIndex < characters.length - 1 && timeLeft > 0) {
  //     if (!isTyping) {
  //       setIsTyping(true);
  //     }
  //     if (typedChar == null) {
  //       if (charIndex > 0) {
  //         setCharIndex((prev) => prev - 1);
  //         const element = document.createElement('div');
  //         element.innerHTML = characters[charIndex];
  //         if (element.classList.contains('incorrect')) {
  //           setMistakes((prev) => prev - 1);
  //         }
  //       }
  //     } else {
  //       if (characters[charIndex] === typedChar) {
  //         const element = document.createElement('div');
  //         element.innerHTML = characters[charIndex];
  //         element.classList.add('correct');
  //         characters[charIndex] = element.innerHTML;
  //       } else {
  //         setMistakes((prev) => prev + 1);
  //         const element = document.createElement('div');
  //         element.innerHTML = characters[charIndex];
  //         element.classList.add('incorrect');
  //         characters[charIndex] = element.innerHTML;
  //       }
  //       setCharIndex((prev) => prev + 1);
  //     }
  //   } else {
  //     if (timerRef.current) {
  //       clearInterval(timerRef.current);
  //     }
  //     setInputValue('');
  //   }
  // };

  // const initTimer = () => {
  //   if (timeLeft > 0) {
  //     setTimeLeft((prev) => prev - 1);
  //   } else {
  //     clearInterval(timerRef.current);
  //   }
  // };

  // const resetGame = () => {
  //   loadParagraph();
  //   clearInterval(timerRef.current);
  //   setTimeLeft(60);
  //   setCharIndex(0);
  //   setMistakes(0);
  //   setIsTyping(false);
  //   setInputValue('');
  // };
  // const calculateWPM = () => {
  //   let wpm = Math.round(((charIndex - mistakes) / 5) / (60 - timeLeft) * 60);
  //   return wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
  // };
  return (
    <div className="container-fluid col-md-4 border border-danger mx-auto mh-c">
      <input type="text" className="input-field" />
      <div className="content-box">
        <div className="typing-text">
          <p id="paragraph"></p>
        </div>
        <div className="content">
          <ul className="result-details">
            <li className="time">
              <p> Time Left:</p>
              <span><b>60</b>s</span>
            </li>
            <li className="mistake">
              <p>Mistakes:</p>
              <span>0</span>
            </li>
            <li className="wpm">
              <p>WPM:</p>
              <span>0</span>
            </li>

          </ul>
          {/* <button onClick={resetGame}>Try Again</button> */}
        </div>
      </div>
    </div>
  );
}




