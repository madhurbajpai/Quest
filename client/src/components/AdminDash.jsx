import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDash.css";
import LoginContext from "./CustomQuizz/context/LoginContext";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Login from "./LoginRegister/Login";
const AdminDash = () => {
  const [quizDetail, setQuizDetail] = useState([]);
  const navigate = useNavigate();

  const { loginId } = useContext(LoginContext);

  useEffect(() => {
    if (loginId && loginId.quizIds) {
      // console.log('Login ID on page load:', loginId.quizIds);
      getHistory();
      // Add any additional logic you want to execute on page load here
    }
  }, [loginId]);

  const deleteQuiz = async (i) => {
    // console.log(loginId.quizIds, loginId.quizIds[i]);
    const response = await axios.post("http://localhost:8000/delete-quiz", {
      quizId: loginId.quizIds[i],
    });

    if (response) {
      window.alert("Quiz Deleted successfully");
      getHistory();
    }
  };

  const getHistory = async () => {
    // console.log('here is login id',loginId.adminId)
    try {
      const response = await axios.post("http://localhost:8000/get-quizzes", {
        quizIds: loginId.quizIds,
      });
      if (response) {
        setQuizDetail(response.data.quizzes);
        // console.log(quizDetail);
      }
    } catch (error) {
      console.log("Some Error Occured getting quiz history", error);
    }
  };

  const viewQuiz = (i) => {
    const detail = {
      adminId: loginId.adminId,
      quiz: quizDetail[i],
    };
    navigate("/detail-quiz", { state: { detail } });
  };

  return (
    <div>
      {loginId ? (
        <div className="admin-main">
          <Header />
          <div className="admin-info">
            <h1 className="user-head">Welcome, {loginId.adminName}</h1>
          </div>
          <hr />
          <div className="admin-btn">
            <h1 className="history-head">Custom/Random Quizes</h1>
            <div className="admin-btn-grp">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/custom-quiz")}
              >
                Create New Quizz
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/random-quiz")}
              >
                Create Random Quizz
              </button>
              <button onClick={() => console.log(quizDetail)}>check</button>
            </div>
          </div>
          <hr />
          <div className="admin-history">
            <h1 className="history-head">Previous Quizes</h1>
            {quizDetail !== undefined ? (
              <table
                className="table table-striped table-hover"
                id="table-history"
              >
                <thead>
                  <tr>
                    <th scope="col">S. No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Attempted</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {quizDetail.map((quiz, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{quiz.name}</td>
                      <td>{quiz.dateCreated.split("T")[0]}</td>
                      <td>{quiz.duration} mins</td>
                      <td>{quiz.attemptedBy.length}</td>
                      <td>
                        <VisibilityIcon
                          onClick={() => {
                            viewQuiz(i);
                          }}
                        />
                      </td>
                      <td>
                        <DeleteIcon
                          onClick={() => {
                            deleteQuiz(i);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>No Quiz History</div>
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AdminDash;
