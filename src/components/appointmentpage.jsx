import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../cssComponent/Appointmentpage.css"

const Appointmentpage = () => {

  
  // ---- Admin managed data (can come from Firebase later)
  const departmentTiming = {
    open: "09:00 AM",
    break: "01:00 PM - 02:00 PM",
    close: "05:00 PM",
  };

  const confirmationProbability = 35; // change this to test (<10% fails)

  const [date, setDate] = useState("");
  const [status, setStatus] = useState(""); // success | failed
  const navigate = useNavigate();


  const handleConfirm = () => {
    if (!date) {
      alert("📅 Please select a date first");
      return;
    }

    if (confirmationProbability < 10) {
      setStatus("failed");
      alert("❌ Appointment could not be confirmed due to low availability");
    } else {
      setStatus("success");
      alert("✅ Appointment confirmed successfully!");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="appointment-container">

      <h1 className="page-title">Book Appointment</h1>


      <Button
        onClick={handleBack}
        sx={{
          marginLeft:"90%",
          marginTop:"-4%",
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
      


      <div className="top-section">
        {/* Calendar */}
        <div className="calendar-box">
          <h3>Select Date</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <small className="hint-text">
            Calendar auto-opens based on your device
          </small>
        </div>

        {/* Department Timing */}
        <div className="timing-box">
          <h3>Department Timing</h3>
          <p><strong>Open:</strong> {departmentTiming.open}</p>
          <p><strong>Break:</strong> {departmentTiming.break}</p>
          <p><strong>Close:</strong> {departmentTiming.close}</p>
        </div>
      </div>

      {/* Probability Section */}
      <div className="probability-section">
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              ${confirmationProbability < 10 ? "#e53935" : "#4caf50"}
              ${confirmationProbability * 3.6}deg,
              #e0e0e0 0deg
            )`,
          }}
        >
          <span>{confirmationProbability}%</span>
        </div>

        <p className="probability-text">
          Probability of Appointment Confirmation
        </p>

        <p className="history-text">
          Based on historical appointment data and availability
        </p>
      </div>

      {/* Confirm Button */}
      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Appointment
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="success-message">
          ✅ Appointment has been confirmed!
        </p>
      )}

      {status === "failed" && (
        <p className="failed-message">
          ❌ Appointment could not be confirmed
        </p>
      )}
    </div>
  );
};

export default Appointmentpage;