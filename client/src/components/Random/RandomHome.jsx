import React, { useState } from "react";
import Header from "../Header";
import "./RandomHome.css";
const RandomHome = () => {
  const [data, setData] = useState([]);
  const [noq, setNoq] = useState(1);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

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
          Create Quizz
        </button>
      </div>
      <hr />
      <div className="show-quest">
        {data.length === 0
          ? " "
          : data.results.map((Questions, index) => {
              return (
                <div className="question-sec">
                  Ques {index+1}. {decodeHTMLEntities(Questions.question)}
                  {Questions.type === "multiple" ? (
                    <div className="options-multiple">
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
