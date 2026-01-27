import React, { useState } from "react";
import { auth, db } from "./components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import medisync from "./photo/medisync.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Login user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem("user", JSON.stringify(userData)); // save user info locally
        alert("Login successful!");
        // Navigate based on role if needed
        if (userData.role === "Patient") navigate("/patient-dashboard");
        else if (userData.role === "Doctor") navigate("/doctor-dashboard");
        else navigate("/admin-dashboard");
      } else {
        alert("No user data found!");
      }
    } catch (error) {
      alert(error.message);
    }
  
  };


  return (
    <div className="login-container">
      <p className="para">Welcome to MediSync</p>
      <img className="logo" src={medisync} alt="logo"/>
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>

        <p style={{marginTop:"10px"}}>
          Don't have an account?{" "}
          <Link to="/Signup" style={{color:"#2434ec"}}>Sign up</Link> 
        </p>
      </form>
    </div>
  );
};

export default Login;