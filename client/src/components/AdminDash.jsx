import React from "react";
import Header from "./Header";
import {useNavigate} from 'react-router-dom'
import "./AdminDash.css";
const AdminDash = () => {
  const navigate = useNavigate();
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <div className="admin-main">
          <Header />
          <div className="admin-info">
            <h1 className="user-head">Welcome, Admin</h1>
            <span class="material-symbols-outlined" id='admin-account'>account_circle</span>
          </div>
          <hr />
          <div className="admin-btn">
            <h1 className="history-head">Custom/Random Quizes</h1>
          <div className="admin-btn-grp">
            <button type="button" className="btn btn-primary" onClick={()=>navigate('/custom-quiz')}>
              Create New Quizz
            </button>
            <button type="button" className="btn btn-primary" onClick={()=>navigate('/random-quiz')}>
              Create Random Quizz
            </button>
          </div>
          </div>
          <hr />
          <div className="admin-history">
            <h1 className="history-head">Previous Quizes</h1>
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
                  <th scope="col">Manage</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Geography</td>
                  <td>01/11/2023</td>
                  <td>15 mins</td>
                  <td>40</td>
                  <td>
                    <span class="material-symbols-outlined">visibility</span>
                  </td>
                  <td>
                    <span class="material-symbols-outlined">delete</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>History</td>
                  <td>02/11/2023</td>
                  <td>20 mins</td>
                  <td>35</td>
                  <td>
                    <span class="material-symbols-outlined">visibility</span>
                  </td>
                  <td>
                    <span class="material-symbols-outlined">delete</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Polity</td>
                  <td>03/11/2023</td>
                  <td>30 mins</td>
                  <td>20</td>
                  <td>
                    <span class="material-symbols-outlined">visibility</span>
                  </td>
                  <td>
                    <span class="material-symbols-outlined">delete</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>General Knowledge</td>
                  <td>04/11/2023</td>
                  <td>15 mins</td>
                  <td>10</td>
                  <td>
                    <span class="material-symbols-outlined">visibility</span>
                  </td>
                  <td>
                    <span class="material-symbols-outlined">delete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AdminDash;
