import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './UserRegistration.css'

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
  
    // Load existing user data from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add the new user to the existing users array
    const updatedUsers = [...existingUsers, newUser];
  
    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    alert('Registration successful! You can now log in.');
  
    navigate('/login');; // Initialize the navigate function

  };
  

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-register">
          Register
        </button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
};

export default UserRegistration;