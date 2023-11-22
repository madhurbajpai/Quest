import React, { useState } from 'react';
import './Instruction.css'
import Header from '../Header';

const Instruction = ({ onProceed }) => {
  const [proceedClicked, setProceedClicked] = useState(false);

  const handleProceedClick = () => {
    setProceedClicked(true);

    onProceed();
  };

  return (
    <div>
      <Header />
      <div className='instructcontainer'>
        <h1>Quiz Instructions</h1>
        <div className="underline"></div>

        <p>
          Welcome to the Quiz App! Please read the following instructions carefully before starting the quiz.
        </p>

        <ul>
          <li>There will be a series of questions.</li>
          <li>Choose the correct answer for each question.</li>
          <li>There is a timer for this quiz.</li>
          <li>Click the "Proceed" button when you are ready to start the quiz.</li>
        </ul>

        {!proceedClicked && (
          <div className="button-container">
            <button className="previous-button" onClick={() => console.log('Previous clicked')}>
              Previous
            </button>
            <button className="proceed-button" onClick={handleProceedClick}>
              Proceed to Quiz
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Instruction;
