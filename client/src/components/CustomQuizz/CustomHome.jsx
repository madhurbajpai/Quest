import React, { useState } from "react";
import Header from "../Header.jsx";
import Forms from "./Forms/Forms.jsx";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./CustomQuizz.css";
import { IconButton } from "@mui/material";
const CustomHome = () => {
  const [isCreated, setisCreated] = useState(false);
  const [isgetCode, setisgetCode] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startTime, setstartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [duration, setduration] = useState(0);

  return (
    <div>
      <Header />
      <div className="custom-mid">
        <div className="custom-head">
          <div className="one">
            <div className="input-field">
              <label>Name </label>
              <input
                className="inp"
                type="text"
                placeholder="Name of Quizz"
                required
                onChange={(event) => setName(event.target.value)}
              />

              <label>Description</label>
              <input
                type="text"
                placeholder="Description of Quizz"
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
          </div>
          <div className="one">
            <div className="input-field">
              <label>Start Time</label>
              <input
                className="inp"
                type="datetime-local"
                required
                onChange={(event) => setstartTime(event.target.value)}
              />

              <label>End Time</label>
              <input
                type="datetime-local"
                required
                onChange={(event) => setendTime(event.target.value)}
              />
            </div>
          </div>
          <div className="one" style={{ width: "50%" }}>
            <div className="input-field">
              <label>Duration</label>
              <input
                className="inp"
                type="number"
                min="0"
                placeholder="Duration of Quizz"
                required
                onChange={(event) => setduration(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <Forms />

      <div className="custom-final" style={{display:"flex", justifyContent: "center", alignItems:"center", marginBottom:"20px", backgroundColor: "#22092c", flexDirection: "column"}}>
        <div>
          <button style={{ marginTop: "30px", marginBottom:"30px", backgroundColor: "#13aa52" }} class="button-30" role="button">
          Create Quiz
        </button>
        {isCreated ?(<button style={{ marginTop: "30px", marginLeft: "30px", marginBottom:"30px", backgroundColor: "#13aa52" }} class="button-30" role="button">
          Get Quiz Code
        </button>): "" }
        
        </div>
        {isgetCode? (<div>
        <input type="text" value="Quiz Code" style={{marginBottom: "20px", padding: "5px", textAlign: "center"}}/>
        <IconButton style={{backgroundColor:"white", marginLeft: "1px", marginBottom: "2px", borderRadius: "0%"}}><ContentCopyIcon/></IconButton>
        </div>): ""}
        
      </div>
    </div>
  );
};

export default CustomHome;
