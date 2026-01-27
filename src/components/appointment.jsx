import { colors } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../cssComponent/Appointment.css"


const hospitalData = [
  {
    id: 1,
    name: "Global Hospital",
    location: "Sindri",
    type: "Private",
    rating: 4,
  },
  {
    id: 2,
    name: "District Hospital Dhanbad",
    location: "Dhanbad",
    type: "goverrnment",
    rating: 5,
  },
  {
    id: 3,
    name: "Orchid Hospital",
    location: "Ranchi",
    type: "Government",
    rating: 3,
  },
  {
    id: 4,
    name: "Sadar Hospital",
    location: "Ranchi",
    type: "Government",
    rating: 4,
  },
  {
    id: 5,
    name: "Devkamal Hospital",
    location: "Ranchi",
    type: "Private",
    rating: 5,
  },
  {
    id: 6,
    name: "Pragati Hospital",
    location: "Dhanbad",
    type: "Private",
    rating: 4,
  },
  {
    id: 7,
    name: "RIMS Parasnath",
    location: "Ranchi",
    type: "Private",
    rating: 5,
  },
  {
    id: 8,
    name: "AIIMS Medical College",
    location: "Deoghar",
    type: "Government",
    rating: 5,
  },

];

const Appointment = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredHospitals = hospitalData.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(search.toLowerCase()) ||
      hospital.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || hospital.type === filter;

    return matchesSearch && matchesFilter;
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="finder-wrapper">
      <div className="finder-header">
        <h2>Find a Hospital</h2>

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
      


      </div>

      <div className="controls">
        <input
          className="search-box"
          type="text"
          placeholder="Search by name or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-buttons">
          <button
          sx={{color:"black"}}
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === "Private" ? "active" : ""}
            onClick={() => setFilter("Private")}
          >
            Private
          </button>
          <button
            className={filter === "Government" ? "active" : ""}
            onClick={() => setFilter("Government")}
          >
            Government
          </button>
        </div>
      </div>

      <div className="hospital-grid-container">
        <div className="hospital-grid">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="hospital-card">
              <div className="hospital-top">
                <span className="hospital-icon">🏥</span>
                <span className={`badge ${hospital.type.toLowerCase()}`}>
                  {hospital.type}
                </span>
              </div>

              <h4>{hospital.name}</h4>
              <p className="location">{hospital.location}</p>

              <div className="rating">
                {"★".repeat(hospital.rating)}
                {"☆".repeat(5 - hospital.rating)}
              </div>

              <button
                className="view-btn"
                 onClick={() => navigate("/departmentpage")}
              >View Department
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;