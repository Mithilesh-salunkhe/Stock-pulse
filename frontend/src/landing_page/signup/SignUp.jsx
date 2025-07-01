import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added useNavigate

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Hook to navigate programmatically

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/signup",
        formData,
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Signup successful");

      // ✅ Redirect to dashboard on success
      if (res.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setMessage("Signup failed: " + (error.response?.data?.message || ""));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h4 className="card-title text-center mb-3">Sign Up</h4>
        {message && <p className="text-center text-info">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="mt-3 text-center">
          <Link to="/login" style={{ textDecoration: "none", color: "#2A56C5" }}>
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
