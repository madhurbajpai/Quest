// QuizComponent.js

import React, { useState } from 'react';
import './User_Quiz.css';
import Header from "../Header";

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctOption: 'Paris',

        question: 'What is the capital of India',
        options: ['Berlin', 'Paris', 'Delhi', 'Rome'],
        correctOption: 'Delhi',
    },

];

const UserQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [navBarVisible, setNavBarVisible] = useState(false);

    const handlePrevious = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedOption(null);
    };

    const handleNavBarToggle = () => {
        setNavBarVisible(!navBarVisible);
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
        setSelectedOption(null);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleUndo = () => {
        setSelectedOption(null);
    };

    const handleQuestionNavigation = (index) => {
        setCurrentQuestionIndex(index);
        setSelectedOption(null);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Header />
            <div className="body1">
                <div className="quiz-container">
                    <button className="nav-bar-toggle" onClick={handleNavBarToggle}>
                        &#x2192; {/* Right arrow character */}
                    </button>
                    <div className={`navigation-bar ${navBarVisible ? 'visible' : ''}`}>
                        {questions.map((_, index) => (
                            <button key={index} onClick={() => handleQuestionNavigation(index)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <div className="question-container">
                        <h2>{currentQuestion.question}</h2>
                    </div>
                    <div className="options-container">
                        {currentQuestion.options.map((option, index) => (
                            <div key={index} className={`option ${selectedOption === option ? 'selected' : ''}`}>
                                <div className="option-circle" onClick={() => handleOptionSelect(option)}>
                                    {selectedOption === option && <div className="selected-indicator">&#10003;</div>}
                                </div>
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>
                    <div className="button-container">
                        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                            Previous
                        </button>
                        <button onClick={handleUndo} disabled={selectedOption === null}>
                            Undo
                        </button>
                        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                            Next
                        </button>
                    </div>
                    <div className="navigation-bar">
                        {questions.map((_, index) => (
                            <button key={index} onClick={() => handleQuestionNavigation(index)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserQuiz;
