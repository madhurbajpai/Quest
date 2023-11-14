import React, { useState } from "react";
import {
  AccordionDetails,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import SubjectIcon from "@mui/icons-material/Subject";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { AccordionSummary } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Forms.css";

const Forms = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "What is capital of Bhutan?",
      questionType: "radio",
      options: [
        { optionText: "New York" },
        { optionText: "London" },
        { optionText: "Thimpu" },
        { optionText: "Kathmandu" },
      ],
      open: true,
      required: false,
    },
    {
      questionText: "What is capital of Bhutan?",
      questionType: "radio",
      options: [
        { optionText: "New York" },
        { optionText: "London" },
        { optionText: "Thimpu" },
        { optionText: "Kathmandu" },
      ],
      open: true,
      required: false,
    },
  ]);

  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add-border" : ""}
        >
          {/* <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ widht: "100%" }}
          >
            {questions[i].open ? (
              <div className="saved-questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary> */}
          <div className="question-boxes">
            <AccordionDetails className="add-question">
              <div className="add-quesiton-top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                />
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                >
                  <MenuItem id="text" value="Text">
                    {" "}
                    <SubjectIcon style={{ marginRight: "10px" }} />
                    Paragraph{" "}
                  </MenuItem>
                  <MenuItem id="checkbox" value="Checkbox">
                    {" "}
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    CheckBox
                  </MenuItem>
                  <MenuItem id="radio" value="Radio">
                    {" "}
                    <RadioButtonCheckedIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Multiple Choice Questions{" "}
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add-question-body" key={j}>
                  {ques.questionType != "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text-input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                    />
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}

              {ques.options.length < 5 ? (
                <div className="add-question-body">
                  <FormControlLabel
                    disabled
                    control={
                      (ques.questionType != "text") ? (
                        <input
                          type={ques.questionType}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                      ) : (
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      )
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text-input"
                          style={{ fontSize: "13px", width: "80px" }}
                          placeholder="Add Other"
                        ></input>
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}

              <div className="add-footer">
                <div className="add-question-left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    <OpenInNewIcon
                      style={{
                        border: "2px solid #4285f4",
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />
                    Answer Key
                  </Button>
                </div>

                <div className="add-question-bottom">
                  <IconButton aria-label="copy">
                    <FilterNoneIcon />
                  </IconButton>

                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <div>
      <div className="question-form">
        <br />
        <div className="section">
          <div className="question-title-section">
            <div className="question-form-top">
              <input
                type="text"
                className="question-form-top-name"
                style={{ color: "black" }}
                placeholder="Untitled Document"
              />
              <input
                type="text"
                className="question-form-top-desc"
                placeholder="Untitled Description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
};

export default Forms;
