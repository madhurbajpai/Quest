import React from "react";
import { useLocation } from "react-router-dom";
import "./AdminQuizDetail.css";
import BannerBackground from "./home-banner-background.png";

import Header from "./Header";

const AdminQuizDetail = () => {
  // const location = useLocation();
  // const { detail } = location.state || {};
  
  const detail = {
    // adminId: loginId.adminId,
    // quiz: quizDetail[i],
    adminId:'1231321342',
    quiz: {
      attemptedBy: [{_id: '897897', name:'user-1'},{_id: '89789', name:'user-2'}],
      createdBy: {_id: '897897', name:'admin-1'},
      dateCreated: '2023-11-18T19:17:34',
      description: 'test',
      duration: 20,
      endTime: '2023-11-18T19:17:34',
      name: 'Name-1',
      questions: [{
        correctAnswer: "Star Wars",
        marks: 1,
        options: ['option-1','option-2','option-2','option-3','option-4'],
        questionText: 'What is the capital of your home?',
        questionType: 'mulitple-choice',

      }],
      startTime: '2023-11-18T19:17:34'
    }
  }

  const userDetail = [
    { name: "user-1", duration: 14, timeTaken: 10, score: 10, show: true },
  ];
  console.log(detail);
  return (
    <div className="main-detail">
      <Header />
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <div className="quiz-detail">
        <div className="details">
          <div>
          <div className="quiz-name">Quiz Name : {detail.quiz.name}</div>
          <div className="quiz-name"> Quiz Description : {detail.quiz.description}</div>
        </div>
        <div>
          <div className="quiz-name"> Quiz Start Time : {detail.quiz.startTime.split("T")[0]}</div>
          <div className="quiz-name">Quiz End Time : {detail.quiz.endTime.split("T")[0]}</div>
        </div>
        <div>
          <div className="quiz-name">Date :
            {detail.quiz.dateCreated.split("T")[0]}
          </div>
          <div className="quiz-name">Total Time of Quiz={detail.quiz.duration} mins</div>
        </div>
        </div>
        <div className="quest-detail">
          {detail.quiz.questions.map((ques, i) => (
            <div className="questions-detail">
              <div className="ques-text">
                <div>{ques.questionText}</div>
                <div>{ques.marks}</div>
              </div>
              <div className="ques-options">
                {ques.options.map((op, j) => (
                  <div className="option-text">
                    <input type="radio" disabled />
                    <div className="op-txt">{op}</div>
                  </div>
                ))}
              </div>
              <div className="correct-ans">
                {ques.questionType !== "short-answer" ? (
                  <div>Correct-Answer: {ques.correctAnswer}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="user-detail-attempted">
        <p>User</p>
        <table className="table table-striped table-hover" id="table-history">
          <thead>
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">User-Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Time-taken</th>
              <th scope="col">Score</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {userDetail.map((usr, ij) => (
              <tr key={ij}>
                <th scope="row">{ij + 1}</th>
                <td>{usr.name}</td>
                <td>{usr.duration}</td>
                <td>{usr.timeTaken} mins</td>
                <td>{usr.score}</td>
                <td>{usr.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminQuizDetail;
