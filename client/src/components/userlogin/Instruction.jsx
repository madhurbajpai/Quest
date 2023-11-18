import React, { useState } from 'react';
import './Instruction.css'

const Instruction = ({ onProceed }) => {
  const [proceedClicked, setProceedClicked] = useState(false);

  const handleProceedClick = () => {
    setProceedClicked(true);
    
    onProceed();
  };

  return (
    <div className='instructcontainer'>
      <h1>Quiz Instructions</h1>
      <p>
        Welcome to the Quiz App! Please read the following instructions carefully before starting the quiz.
      </p>

      <ul>
        <li>There will be a series of questions.</li>
        <li>Choose the correct answer for each question.</li>
        <li>There is a timer for this quiz.</li>
        <li>Click the "Proceed" button when you are ready to start the quiz.</li>
      </ul>

      {proceedClicked ? (
        <p>Proceed button clicked! Add your custom content or logic here.</p>
      ) : (
        <button onClick={handleProceedClick}>Proceed to Quiz</button>
      )}
    </div>
  );
};

export default Instruction;
