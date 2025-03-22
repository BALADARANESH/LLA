import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { username, email, mobile, password } = formData;
    
    // Validation
    if (!username || !email || !mobile || !password) {
      setError("All fields are required!");
      return;
    }
    if (!email.includes("@gmail.com")) {
      setError("Email must contain '@gmail.com'");
      return;
    }
    if (mobile.length > 10 || isNaN(mobile)) {
      setError("Mobile number must be up to 10 digits and contain only numbers");
      return;
    }
    if (password.length > 8) {
      setError("Password must be up to 8 characters");
      return;
    }

    // If all validations pass, navigate to the quiz page
    navigate("/quiz");
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (@gmail.com)"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number (Up to 10 digits)"
            value={formData.mobile}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (Up to 8 characters)"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Full white background
  },
  loginBox: {
    width: "350px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#008000", // Green box
    color: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "white",
    color: "#008000",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default Login;
