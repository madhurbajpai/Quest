import React, { useState } from "react";
import Header from "../Header";
import axios from 'axios';
import "./RandomHome.css";
const RandomHome = () => {
  const [data, setData] = useState([]);
  const [saveActive, setsaveActive] = useState(false);
  const [code, setCode] = useState('');
  const [isClicked, setisClicked] = useState(false);
  const [noq, setNoq] = useState(1);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startTime, setstartTime] = useState('');
  const [endTime, setendTime] = useState('');
  const [duration, setDuration] = useState(0);
  const adminId = '65531174c85545d1eaae421d';
  const usersId = ['6553124e8993e4b34a4d5f43','65531311c460e7e9d52d3e0d'];


  const Difficulty = [
    { value: "", label: "Any Difficulty" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const Category = [
    { value: "", label: "Any Category" },
    { value: "9", label: "General Knowledge" },
    { value: "10", label: "Entertainment: Books" },
    { value: "11", label: "Entertainment: Films" },
    { value: "12", label: "Entertainment: Music" },
    { value: "13", label: "Entertainment: Musical & Theatre" },
    { value: "14", label: "Entertainment: Television" },
    { value: "15", label: "Entertainment: Video Games" },
    { value: "16", label: "Entertainment: Board Games" },
    { value: "17", label: "Science & Nature" },
    { value: "18", label: "Science: Computers" },
    { value: "19", label: "Science: Mathematics" },
    { value: "20", label: "Mythology" },
    { value: "21", label: "Sports" },
    { value: "22", label: "Geopgraphy" },
    { value: "23", label: "History" },
    { value: "24", label: "Politics" },
    { value: "25", label: "Arts" },
    { value: "26", label: "Celebrities" },
    { value: "27", label: "Animal" },
  ];

  const Type = [
    { value: "", label: "Any Type" },
    { value: "multiple", label: "Multiple Choice" },
    { value: "boolean", label: "True/False" },
  ];

  const getquest = async () => {
    const URL = `https://opentdb.com/api.php?amount=${noq}&category=${category}&difficulty=${difficulty}&type=${type}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      await setData(data);

    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const saveQuiz = async () => {
    if(!name || !startTime || !endTime || !duration){
      window.alert('Some fields are missing');
      return ;
    }
    const suffleOptions = (array) => {
      for(let i = array.length-1; i >= 0; i--){
        array[i] = decodeHTMLEntities(array[i]);
      }
      for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]] = [array[j],array[i]];
      }
      return array;
    };
    try{
      const response = await axios.post('http://localhost:8000/add-quiz', {
        name: name,
        description: desc,
        dateCreated: new Date(),
        startTime: startTime,
        endTime: endTime,
        duration: duration,
        createdBy: adminId,
        attemptedBy: usersId,
        questions: data.results.map((ques) => ({
          questionText: decodeHTMLEntities(ques.question),
          questionType: ques.type === 'multiple' ? ('multiple-choice'): (ques.type === 'boolean' ? 'true-false': 'short-answer'),
          options: suffleOptions(ques.incorrect_answers.concat(ques.correct_answer)),
          correctAnswer: ques.type === 'multiple' || ques.type === 'boolean' ? (decodeHTMLEntities(ques.correct_answer)) : "",
          marks: 1
        }))
      })

      if(response){
        setsaveActive(true);
        setCode(response.data.quizId);
        console.log('quiz sent to backend')
      }
    }catch(error){
      console.log("Some error occured during saving the quiz", error);
    }
  }

  const createCode = () => {
    setisClicked(true);
  }
  function decodeHTMLEntities(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
  return (
    <div className="random-main">
      <Header />
      <div className="sec1">
        <h1 className="rand-head">Create Random Quizz</h1>
      </div>
      <hr />
      <div className="questions">

        <label for="inputEmail4">Name of the Quizz</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          required
          onChange={(event) => setName(event.target.value)}
        />

        <label for="inputEmail4">Description of Quiz</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          onChange={(event) => setDesc(event.target.value)}
        />


        <label for="inputEmail4">Start Time of Quiz</label>
        <input
          type="datetime-local"
          class="form-control"
          id="inputEmail4"
          required
          onChange={(event) => setstartTime(event.target.value)}
        />

        <label for="inputEmail4">End Time of Quiz</label>
        <input
          type="datetime-local"
          class="form-control"
          id="inputEmail4"
          required
          onChange={(event) => setendTime(event.target.value)}
        />

        <label for="inputEmail4">Duration (in minutes)</label>
        <input
          type="number"
          class="form-control"
          id="inputEmail4"
          required
          onChange={(event) => setDuration(event.target.value)}
        />

        <label for="inputEmail4">Number of Questions</label>
        <input
          type="number"
          class="form-control"
          min={1}
          max={50}
          id="inputEmail4"
          placeholder="Number of questions"
          onChange={(event) => setNoq(event.target.value)}
        />
        <label for="category">Choose a Category</label>

        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
        >
          {Category.map((option, index) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <label for="category">Choose a Difficulty</label>

        <select
          name="difficulty"
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {Difficulty.map((option, index) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <label for="type">Choose a Type</label>
        <select
          name="type"
          id="type"
          onChange={(event) => setType(event.target.value)}
        >
          {Type.map((option, index) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="sec3">
        <button className="rand-create" onClick={getquest}>
          Create Quiz
        </button>

        <button className="rand-create" onClick={saveQuiz}>
          Save Quiz
        </button>
        {saveActive ? (<button className="rand-create" onClick={createCode}>
          Create Quiz Code
        </button>): ""}
        {
          isClicked ? <div>{code}</div> : ""
        }
      </div>
      <hr />
      <div className="show-quest">
        {data.length === 0
          ? " "
          : data.results.map((Questions, index) => {
              return (
                <div className="question-sec">
                  Ques {index+1}. {decodeHTMLEntities(Questions.question)}. {Questions.type}
                  {Questions.type === "multiple" ? (
                    <div className="options-multiple">
                      
                      {/* all: {decodeHTMLEntities(Questions.incorrect_answers)} <br /> */}
                      a: {decodeHTMLEntities(Questions.correct_answer)}
                      <br />
                      b: {decodeHTMLEntities(Questions.incorrect_answers[0])}
                      <br />
                      c: {decodeHTMLEntities(Questions.incorrect_answers[1])}
                      <br />
                      d: {decodeHTMLEntities(Questions.incorrect_answers[2])}
                      <br />
                      <br />
                    </div>
                  ) : (
                    <div className="options-tf">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                        <label for="html">{Questions.correct_answer}</label>
                      <br />
                     
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                      />
                        <label for="css">{Questions.incorrect_answers}</label>
                      <br />
                    </div>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default RandomHome;
