import React from "react";
import "./ProgressBar.css";  // Make sure this file exists

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;  // ✅ Default export to fix import issue
