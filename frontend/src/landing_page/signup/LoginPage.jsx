import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/auth/login", {
        email,
        password,
      }, { withCredentials: true });

      alert("Login successful");
      navigate("/dashboard"); // Change this to the desired post-login route
    } catch (err) {
      console.error(err);
      alert("Login failed: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h4 className="card-title text-center mb-3">Log In</h4>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="mt-3 text-center">
          <Link to="/signup" style={{ textDecoration: "none", color: "#2A56C5" }}>
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
