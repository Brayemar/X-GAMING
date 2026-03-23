import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'; // Separate CSS for Signup
import bgImage from "../assets/images/GAMEPAD.webp"; // exact filename



const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as registration is in progress...");
    try {
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post("https://brayemar.alwaysdata.net/api/signup", formdata);

      setLoading("");
      setSuccess(response.data.message);
      setUsername(""); setEmail(""); setPassword(""); setPhone("");
      setTimeout(() => setSuccess(""), 5000);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <h1 className="neon-title">Create Your Account</h1>
      </div>

      <div className="signup-form-container">
        {loading && <h3 className="loading-text">{loading}</h3>}
        {success && <h3 className="success-text">{success}</h3>}
        {error && <h3 className="error-text">{error}</h3>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className="neon-button">Sign Up</button>
        </form>

        <p className="signin-link">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;