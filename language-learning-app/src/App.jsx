import React, { useState } from "react";
import Quiz from "./components/Quiz";

const questionsData = {
  Tamil: [
    { question: "தமிழில் 'Hello' என்பதற்கான பொருள்?", options: ["வணக்கம்", "Bonjour", "Hola", "Ciao"], correctAnswer: "வணக்கம்" },
    { question: "தமிழில் 'Thank You' என்பதற்கான பொருள்?", options: ["நன்றி", "Gracias", "Merci", "Danke"], correctAnswer: "நன்றி" },
  ],
  Hindi: [
    { question: "'Hello' in Hindi?", options: ["Hola", "Bonjour", "Namaste", "Ciao"], correctAnswer: "Namaste" },
    { question: "'Good Night' in Hindi?", options: ["Buenos Noches", "Bonne Nuit", "Shubh Ratri", "Gute Nacht"], correctAnswer: "Shubh Ratri" },
  ],
  Malayalam: [
    { question: "Malayalam word for 'Thank You'?", options: ["Gracias", "Merci", "Nanni", "Danke"], correctAnswer: "Nanni" },
    { question: "Malayalam word for 'Good Morning'?", options: ["Bonjour", "Shubh Prabhat", "Suprabhatam", "Guten Morgen"], correctAnswer: "Suprabhatam" },
  ],
};

function App() {
  const [step, setStep] = useState("login");
  const [userData, setUserData] = useState({ username: "", email: "", mobile: "", password: "" });
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const handleLogin = () => {
    const { username, email, mobile, password } = userData;
    if (!username || !email.includes("@gmail.com") || mobile.length !== 10 || password.length > 8) {
      alert("Please enter valid details!");
      return;
    }
    setStep("language-selection");
  };

  const toggleLanguageSelection = (language) => {
    let updatedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((lang) => lang !== language)
      : [...selectedLanguages, language].slice(0, 3);

    setSelectedLanguages(updatedLanguages);
  };

  const handleLanguageSelection = () => {
    if (selectedLanguages.length === 0) {
      alert("Please select at least one language!");
      return;
    }
    let combinedQuestions = [];
    selectedLanguages.forEach((lang) => {
      combinedQuestions = [...combinedQuestions, ...questionsData[lang]];
    });
    setQuizQuestions(combinedQuestions);
    setStep("quiz");
  };

  return (
    <div style={styles.fullScreenContainer}>
      {step === "login" && (
        <div style={styles.formContainer}>
          <h2>Login</h2>
          <input type="text" placeholder="Username" style={styles.input} onChange={(e) => setUserData({ ...userData, username: e.target.value })} /><br />
          <input type="email" placeholder="Email (@gmail.com)" style={styles.input} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br />
          <input type="text" placeholder="Mobile (10 digits)" maxLength="10" style={styles.input} onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} /><br />
          <input type="password" placeholder="Password (Max 8 chars)" maxLength="8" style={styles.input} onChange={(e) => setUserData({ ...userData, password: e.target.value })} /><br />
          <button style={styles.button} onClick={handleLogin}>Login</button>
        </div>
      )}

      {step === "language-selection" && (
        <div style={styles.formContainer}>
          <h2>Select Languages</h2>
          <p>(Choose up to 3 languages)</p>
          <div style={styles.languageContainer}>
            {["Tamil", "Hindi", "Malayalam"].map((lang) => (
              <button
                key={lang}
                style={{
                  ...styles.languageButton,
                  backgroundColor: selectedLanguages.includes(lang) ? "#008000" : "white",
                  color: selectedLanguages.includes(lang) ? "white" : "#008000",
                }}
                onClick={() => toggleLanguageSelection(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <button style={styles.button} onClick={handleLanguageSelection}>Start Quiz</button>
        </div>
      )}

      {step === "quiz" && <Quiz questions={quizQuestions} />}
    </div>
  );
}

const styles = {
  fullScreenContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#008000",
  },
  formContainer: {
    textAlign: "center",
    width: "90%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0px 0px 10px rgba(0, 128, 0, 0.3)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #008000",
    borderRadius: "5px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#008000",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  languageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  languageButton: {
    padding: "10px 15px",
    border: "1px solid #008000",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
