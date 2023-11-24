

import React, { useState, useEffect, useRef } from 'react';
import './User_Quiz.css';
import Header from "../Header";



const UserQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [navBarVisible, setNavBarVisible] = useState(false);
    const [timer, setTimer] = useState(null);
    const [quizOver, setQuizOver] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
            correctOption: 'Paris',
        },
        {
            question: 'What is the capital of India',
            options: ['Berlin', 'Paris', 'Delhi', 'Rome'],
            correctOption: 'Delhi',
        },
        {
            question: 'What is the largest mammal on Earth?',
            options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
            correctOption: 'Blue Whale',
        },
        {
            question: 'Who wrote "Romeo and Juliet"?',
            options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
            correctOption: 'William Shakespeare',
        },
        {
            question: 'What is the currency of Japan?',
            options: ['Won', 'Yuan', 'Ringgit', 'Yen'],
            correctOption: 'Yen',
        }
    ];
   
    
    const handlePrevious = () => {
        if (!quizOver) {
            setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            setSelectedOption(null);
          }
    };



    const quizContainerRef = useRef(null);

    const handleNavBarToggle = () => {
        console.log('Toggling navigation bar visibility');
        setNavBarVisible(!navBarVisible);
        console.log('navBarVisible:', navBarVisible);
    };

    const handleDocumentClick = (event) => {
        // Close the navigation bar if clicked outside the quiz container
        if (quizContainerRef.current && !quizContainerRef.current.contains(event.target)) {
            setNavBarVisible(false);
        }


    };

    useEffect(() => {

        const handleBodyClick = (event) => {

            if (quizContainerRef.current && !quizContainerRef.current.contains(event.target)) {
                setNavBarVisible(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);


        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);


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

        setNavBarVisible(false);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    const handlePopupRestart = () => {
        setPopupVisible(false);
        setQuizOver(false);
        setCurrentQuestionIndex(0);
        setTimer(quizDuration);
    };

    const currentQuestion = questions[currentQuestionIndex];



    // Set the duration of the quiz in seconds
    const quizDuration = 10; // 5 minutes (adjust as needed)

    useEffect(() => {
        // Initialize the timer when the component mounts
        setTimer(quizDuration);

        // Update the timer every second
        const timerInterval = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer === 0) {
                setQuizOver(true);
                setPopupVisible(true); // Show the popup when the quiz is over
                clearInterval(timerInterval);
                return 0;
              }
              return prevTimer - 1;
            });
          }, 1000);

        const quizOverTimeout = setTimeout(() => {
            setQuizOver(true);
            setPopupVisible(true);
 // Clear the interval when the popup is shown
        }, quizDuration * 1000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(timerInterval);
            clearTimeout(quizOverTimeout);
          };
    }, []);


    return (
        <div>
            <Header />
            <div className="body1">
                <div className="quiz-container" ref={quizContainerRef}>
                    <button className="nav-bar-toggle" onClick={handleNavBarToggle}>
                        &#x2190; {/* left arrow character */}
                    </button>
                    <div className={`navigation-bar ${navBarVisible ? 'visible' : ''}`}>
                        <div className="question-buttons">
                            {questions.map((_, index) => (
                                <button key={index} onClick={() => handleQuestionNavigation(index)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
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

                        <div className="timer">Time Left: {formatTime(timer)}</div>
                        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                            Previous
                        </button>
                        <button onClick={handleUndo} disabled={selectedOption === null}>
                            Undo
                        </button>
                        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                            Next
                        </button>
                        {popupVisible && (
                            <div className="popup">
                                <div className="popup-content">
                                    <p>Quiz Over!</p>
                                    <button onClick={handlePopupRestart}>Restart Quiz</button>
                                </div>
                                <div className="popup-overlay" onClick={handlePopupClose}></div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserQuiz;

export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
