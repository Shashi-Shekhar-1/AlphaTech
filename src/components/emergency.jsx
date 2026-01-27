import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import '../cssComponent/Emergency.css';

const Emergency = () => {
  const actions = [
    { id: 1, label: 'Call Ambulance', icon: '🚑', color: 'red-btn' },
    { id: 2, label: 'Nearby Hospitals', icon: '🏥', color: 'blue-btn' },
    { id: 3, label: 'Emergency Call', icon: '📞', color: 'orange-btn' },
    { id: 4, label: 'Safety Guide', icon: '📖', color: 'green-btn' },
  ];

  const navigate = useNavigate();


  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <main className="content">
        <section className="hero">
          <h2>Emergency Assistance</h2>

          <Button
        onClick={handleBack}
        sx={{
          marginLeft:"90%",
          marginTop:"-2%",
          display: "flex",
          gap: 1,
          width: "110px",
          height: "45px",
          borderRadius: "38px",
          backgroundColor: "#49b6da",
          color: "#fff",
          "&:hover": { backgroundColor: "#42a9dc" },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIcon sx={{ color: "#479C6A" }} />
        </Box>
        Back
      </Button>
      
          <p>How can we assist you today?</p>
        </section>

        <div className="grid-container">
          {actions.map((action) => (
            <div key={action.id} className={`action-card ${action.color}`}>
              <span className="card-icon">{action.icon}</span>
              <p>{action.label}</p>
            </div>
          ))}
        </div>

        <section className="info-section">
          <div className="info-card">
            <h3>My Emergency Contacts</h3>
            <div className="contact-row">
              <div>
                <p><strong>Ashmit Baraik (Frnd)</strong> +91 6299764667</p>
                <p><strong>Vivek Kumar (Frnd)</strong> +91 8102472502</p>

                <p className="subtext">Family Doctor</p>
              </div>
              <span className="call-mini"></span>
              

            </div>
          </div>

          <div className="info-card">
            <p><strong>Live Location</strong></p>
            <p className="subtext">Address: Hostel 30, Birsa Institute Of Technology Sindri, Dhanbad Jharkhand</p>
            <p className="subtext">GPS Coordinates: 40.7128° N, 74.0060° W</p>
          </div>
        </section>

        <button className="sticky-call-btn">
          <span>📞</span> Call Ambulance
        </button>
      </main>
    </div>
  );
};

export default Emergency;