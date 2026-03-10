import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password, role } = formData;

    if (!email || !password || !role) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();
      console.log("data:", data);

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("role", data.role);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error-text">{error}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="software developer">Software Developer</option>
      </select>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
