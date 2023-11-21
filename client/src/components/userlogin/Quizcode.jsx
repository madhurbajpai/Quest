import React from 'react';
import Header from '../Header';
import './quizcode.css';

const Quizcode = () => {
  return (
    <div>
      <Header />
      <div className="verification-container">
        <div className="codeheader">
          <div className="codetext">Verification Code</div>
          <div className="codeunderline"></div>
        </div>
        <div className="codeinput">
          <input type="text" placeholder="Code" />
        </div>
        <div className="codesubmit-container">
          <div className="codesubmit">OK</div>
        </div>
      </div>

      <h2 className="quiz-history-heading">Quiz History</h2>
      <div className="quiz-history-container">
        {/* Quiz history items */}
        
          <div className="quiz-history-item">
            <div>Quiz Name: Sample Quiz</div>
            <div>Duration: 30 minutes</div>
            <div>Marks: 100</div>
            <button>View</button>
          </div>
        
        
        <div className="quiz-history-item">
          <div>Quiz Name: Another Quiz</div>
          <div>Duration: 45 minutes</div>
          <div>Marks: 120</div>
          <button>View</button>
        </div>

        <div className="quiz-history-item">
          <div>Quiz Name: Another Quiz</div>
          <div>Duration: 45 minutes</div>
          <div>Marks: 120</div>
          <button>View</button>
        </div>
      </div>


    </div>
  );
};

export default Quizcode;
