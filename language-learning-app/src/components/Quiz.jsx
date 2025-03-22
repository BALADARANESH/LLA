import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.fullscreenContainer}>
      {showResult ? (
        <div style={styles.resultContainer}>
          <h2 style={styles.heading}>Quiz Completed!</h2>
          <p style={styles.resultText}>Correct Answers: {correctCount}</p>
          <p style={styles.resultText}>Wrong Answers: {wrongCount}</p>
        </div>
      ) : (
        <div style={styles.quizContainer}>
          <h2 style={styles.heading}>Language Learning Quiz</h2>
          <h3 style={styles.question}>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={styles.button}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ✅ **Styles for Fullscreen, White Background, and Center Alignment**
const styles = {
  fullscreenContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  quizContainer: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
  },
  resultContainer: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 128, 0, 0.2)",
  },
  heading: {
    color: "#008000",
    fontWeight: "bold",
    fontSize: "28px",
  },
  resultText: {
    color: "#008000",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  question: {
    color: "#008000",
    fontSize: "22px",
    marginBottom: "20px",
  },
  button: {
    display: "block",
    margin: "10px auto",
    padding: "12px 24px",
    backgroundColor: "#008000",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.3s",
  },
};

export default Quiz;
