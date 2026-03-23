import axios from 'axios';
import React, { useState } from 'react';
import "./signin.css";
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://brayemar.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {

        // ✅ store user
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setSuccess("Login successful!");

        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {
        setError("Login Failed. Try again.");
      }

    } catch (err) {
      setLoading("");

      if (err.response) {
        setError(err.response.data.message || "Invalid credentials");
      } else {
        setError("Network error. Check your connection.");
      }
    }
  };

  return (
    <div className="container">
      <div className="heading">Sign In</div>

      {/* Messages */}
      {loading && <p style={{ color: "blue" }}>{loading}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="form" onSubmit={handleSubmit}>

        <input
          required
          className="input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="forgot-password">
          <a href="#">Forgot Password?</a>
        </span>

        <input className="login-button" type="submit" value="Sign In" />

      </form>

      <div className="social-account-container">
        <span className="title">Or Sign in with</span>

        <div className="social-accounts">
          <button type="button" className="social-button google"></button>
          <button type="button" className="social-button apple"></button>
          <button type="button" className="social-button twitter"></button>
        </div>
      </div>

      <span className="agreement">
        <Link to="/signup">Create an account</Link>
      </span>
    </div>
  );
};

export default Signin;