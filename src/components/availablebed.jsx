import React from 'react'

import { Box, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import '../cssComponent/Bed.css';
 
const bedData = [
  { id: 1, dept: 'Emergency', occupied: 4, available: 2, room: '202', floor: 2, icon: '🚑' },
  { id: 2, dept: 'Cardiology', occupied: 5, available: 1, room: '103', floor: 2, icon: '❤️' },
  { id: 3, dept: 'Neurology', occupied: 3, available: 3, room: '101', floor: 3, icon: '🧠' },
  { id: 4, dept: 'Orthopedics', occupied: 6, available: 1, room: '104', floor: 5, icon: '🦴' },
  { id: 5, dept: 'Pediatrics', occupied: 2, available: 2, room: '105', floor: 6, icon: '👶' },
  { id: 6, dept: 'General Surgery', occupied: 6, available: 0, room: '106', floor: 7, icon: '🔪' },
  { id: 7, dept: 'Oncology', occupied: 5, available: 1, room: '100', floor: 7, icon: '🎗️' },
  { id: 8, dept: 'Maternity', occupied: 2, available: 2, room: '207', floor: 8, icon: '🤱' },
  { id: 5, dept: 'Pediatrics', occupied: 2, available: 2, room: '105', floor: 6, icon: '👶' },
  { id: 6, dept: 'General Surgery', occupied: 6, available: 0, room: '106', floor: 7, icon: '🔪' },
  { id: 7, dept: 'Oncology', occupied: 5, available: 1, room: '100', floor: 7, icon: '🎗️' },
  { id: 8, dept: 'Maternity', occupied: 2, available: 2, room: '207', floor: 8, icon: '🤱' },
];

const Bed = () => {
  const navigate=useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
  <>
    
       
    <div className="dashboard-container">
     
      <header className="dashboard-header">
        <h1>AVAILABLE BEDS</h1>
           <Button
        onClick={handleBack}
        sx={{
          marginLeft:"90%",
          marginTop:"-3%",
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
      </header>
      
      <div className="table-responsive">
        <table className="bed-table">
          <thead>
            <tr>
              <th>DEPARTMENT</th>
              <th className='vivekoccupy'>OCCUPIED</th>
              <th>AVAILABLE</th>
              <th>ROOM</th>
              <th>FLOOR</th>
            </tr>
          </thead>
          <tbody>
            {bedData.map((item) => (
              <tr key={item.id}>
                <td className="dept-cell">
                  <span className="dept-icon">{item.icon}</span>
                  {item.dept}
                </td>
                <td>{item.occupied}</td>
                <td className={item.available > 0 ? 'status-available' : 'status-full'}>
                  {item.available}
                </td>
                <td>{item.room}</td>
                <td>{item.floor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};


export default Bed;