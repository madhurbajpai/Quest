import React from "react";

const Forms = () => {
  return (
    <div className="form-main">
      <div className="custom-mid">
        <div className="custom-head">
          <div className="one">
            <div className="input-field">
              <label>Name </label>
              <input className="inp" type="text" placeholder="Name of Quizz" />

              <label>Description</label>
              <input type="text" placeholder="Description of Quizz" />
            </div>
          </div>
          <div className="one">
            <div className="input-field">
              <label>Start Time</label>
              <input
                className="inp"
                type="datetime-local"
                placeholder="Name of Quizz"
              />

              <label>End Time</label>
              <input type="datetime-local" placeholder="Description of Quizz" />
            </div>
          </div>
          <div className="one" style={{width:"50%"}}>
            <div className="input-field">
              <label>Duration</label>
              <input
                className="inp"
                type="number"
                min="0"
                placeholder="Duration of Quizz"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
