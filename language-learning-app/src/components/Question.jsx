import React from "react";
import "./Question.css";

const Question = ({ data, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option === data.answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
