

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const departmentsData = [
  {
    id: 1,
    name: "Cardiology",
    floor: 2,
    room: 201,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
  {
    id: 2,
    name: "Neurology",
    floor: 3,
    room: 305,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966476.png",
  },
  {
    id: 3,
    name: "Bone & Joint Problem",
    floor: 4,
    room: 410,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
  },
  {
    id: 4,
    name: "Children Health Care",
    floor: 1,
    room: 110,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966482.png",
  },
  {
    id: 5,
    name: "X-ray,scan,MRI",
    floor: 5,
    room: 520,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966479.png",
  },
  {
    id: 6,
    name: "Skin & Hair",
    floor: 2,
    room: 210,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966487.png",
  },
  {
    id: 7,
    name: "Mental Health",
    floor: 2,
    room: 210,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966476.png",
  },
  {
    id: 8,
    name: "ENT",
    floor: 2,
    room: 210,
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966479.png",
  },
];

const Departments = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const filteredDepartments = departmentsData.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleVisit = (deptName) => {
    alert(`Visiting ${deptName} Department`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="departments-wrapper">
      <h2>Hospital Departments</h2>

    <Button
        onClick={handleBack}
        sx={{
          marginLeft:"95%",
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
      
      
      <p className="subtitle">Find departments, floor & room details</p>

      <input
        type="text"
        className="search-box"
        placeholder="Search Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="departments-grid">
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className="department-card">
            <img src={dept.image} alt={dept.name} />

            <h3>{dept.name}</h3>

            <div className="dept-info">
              <span>🏢 Floor: {dept.floor}</span>
              <span>🚪 Room: {dept.room}</span>
            </div>

            <button
              className="visit-btn"
              onClick={() => navigate("/appointmentpage")}
            >
              Visit Department
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;