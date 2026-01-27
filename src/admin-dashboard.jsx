import React, { useState, useEffect } from "react";
import "./cssComponent/AdminDashboard.css";

const AdminDashboard = () => {
  // Beds for each floor
  const [floor1Beds, setFloor1Beds] = useState([]);
  const [floor2Beds, setFloor2Beds] = useState([]);
  const [floor3Beds, setFloor3Beds] = useState([]);

  // Appointments
  const [offlineAppointments, setOfflineAppointments] = useState(0);
  const [onlineAppointments, setOnlineAppointments] = useState(5); // placeholder

  // Fetch beds (placeholder)
  useEffect(() => {
    // TODO: Fetch bed data from Firebase for each floor
    setFloor1Beds([
      { id: 1, number: 101, isVacant: true },
      { id: 2, number: 102, isVacant: false },
      { id: 3, number: 103, isVacant: true },
      { id: 4, number: 104, isVacant: true },
      { id: 5, number: 105, isVacant: false },
      { id: 6, number: 106, isVacant: true },
      { id: 7, number: 107, isVacant: true },
      { id: 8, number: 108, isVacant: true },
      { id: 9, number: 109, isVacant: true },
      { id: 10, number: 110, isVacant: true },
      { id: 11, number: 111, isVacant: true },
      { id: 12, number: 112, isVacant: true },
      { id: 13, number: 113, isVacant: true },
      { id: 14, number: 114, isVacant: true },
    ]);
    setFloor2Beds([
      { id: 15, number: 201, isVacant: true },
      { id: 16, number: 202, isVacant: false },
      { id: 17, number: 203, isVacant: true },
      { id: 18, number: 204, isVacant: true },
      { id: 19, number: 205, isVacant: true },
      { id: 20, number: 206, isVacant: false },
      { id: 21, number: 207, isVacant: true },
      { id: 22, number: 208, isVacant: true },
      { id: 23, number: 209, isVacant: false },
      { id: 24, number: 210, isVacant: true },
    ]);
    setFloor3Beds([
      { id: 25, number: 301, isVacant: false },
      { id: 26, number: 302, isVacant: true },
      { id: 27, number: 303, isVacant: true },
      { id: 28, number: 304, isVacant: true },
      { id: 29, number: 305, isVacant: false },
      { id: 30, number: 306, isVacant: true },
      { id: 31, number: 307, isVacant: true },
      { id: 32, number: 308, isVacant: false },
      { id: 33, number: 309, isVacant: true },
      { id: 34, number: 310, isVacant: true },
      { id: 35, number: 311, isVacant: true },
      { id: 36, number: 312, isVacant: false },
      { id: 37, number: 313, isVacant: true },
    ]);
  }, []);

  // Toggle bed vacancy
  const toggleBed = (floor, bedId) => {
    const updateBeds = (beds, setBeds) =>
      setBeds(prev => prev.map(b => b.id === bedId ? { ...b, isVacant: !b.isVacant } : b));

    if (floor === 1) updateBeds(floor1Beds, setFloor1Beds );
    if (floor === 2) updateBeds(floor2Beds, setFloor2Beds);
    if (floor === 3) updateBeds(floor3Beds, setFloor3Beds);

    // TODO: Update Firebase
  };

  // Vacant counts
  const vacantCount = beds => beds.filter(b => b.isVacant).length;

  // Handle offline appointments
  const handleOfflineChange = (e) => {
    setOfflineAppointments(Number(e.target.value));
    // TODO: Update Firebase
  };

  // Handle submit
  const handleSubmit = () => {
    // TODO: Submit all data to Firebase
    alert("Data submitted successfully!");
  };

  // Render bed grid for a floor
  const renderFloorBeds = (floor, beds) => (
    <section className="beds-section">
      <h2>Floor {floor} Beds</h2>
      <div className="beds-grid">
        {beds.map(bed => (
          <div
            key={bed.id}
            className={`bed-box ${bed.isVacant ? "vacant" : "occupied"}`}
            onClick={() => toggleBed(floor, bed.id)}
          >
            <span>{bed.number}</span>
          </div>
        ))}
      </div>
      <p className="vacant-count">Vacant Beds: {vacantCount(beds)}</p>
    </section>
  );

  return (
    <div className="admin-dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Beds for each floor */}
      {renderFloorBeds(1, floor1Beds)}
      {renderFloorBeds(2, floor2Beds)}
      {renderFloorBeds(3, floor3Beds)}

      {/* Appointments Section */}
      <section className="appointments-section">
        <h2>Appointments</h2>
        <div className="appointment-inputs">
          <div className="appointment-row">
            <label className="data">Online Appointments:</label>
            <span>{onlineAppointments}</span>
          </div>
          <div className="appointment-row">
            <label className="data">Offline Appointments:</label>
            <input
              type="number"
              value={offlineAppointments}
              onChange={handleOfflineChange}
              min="0"
            />
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default AdminDashboard;