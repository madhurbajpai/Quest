import React from "react";
import Header from "./Header";
import "./AdminDash.css";
const AdminDash = () => {
  return (
    <div className="admin-main">
      <Header />
      <div className="admin-btn-grp">
        <button type="button" class="btn btn-primary">
          Create New Quizz
        </button>
        <button type="button" class="btn btn-primary">
          Create Random Quizz
        </button>
      </div>
      <div className="admin-history">
        <table class="table table-striped table-hover" id='table-history'>
          <thead>
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">Title</th>
              <th scope="col"></th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDash;
