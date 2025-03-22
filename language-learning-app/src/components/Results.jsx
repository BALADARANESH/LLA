import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure score is retrieved safely
  const score = location.state?.score ?? 0;
  const totalQuestions = location.state?.totalQuestions ?? 0;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Quiz Completed!</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
        Your Score: {score} / {totalQuestions}
      </h2>
      <button onClick={() => navigate("/")} style={{ padding: "10px", marginTop: "20px" }}>
        Try Again
      </button>
    </div>
  );
};

export default Results;
