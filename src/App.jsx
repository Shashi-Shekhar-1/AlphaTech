import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./login.jsx";
import Dashboard from "./patient-dashboard.jsx";

import Appointment from "./components/appointment.jsx";

import Emergency from "./components/emergency.jsx";
import Bed from "./components/availablebed.jsx";
import Document from "./components/issueddocument.jsx";
import Billing from "./components/billing.jsx";
import Abouthospital from "./components/abouthospital.jsx";

import Departments from "./components/departmentpage.jsx";

import Appointmentpage from "./components/appointmentpage.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-dashboard" element={<Dashboard/>}/>
        <Route path="/patient-dashboard/appointment" element={<Appointment/>}/>
        <Route path="/patient-dashboard/emergency" element={<Emergency/>}/>
        <Route path="/patient-dashboard/available-bed" element={<Bed/>}/>
        <Route path="/patient-dashboard/issued-document" element={<Document/>}/>
        <Route path="/patient-dashboard/billing" element={<Billing/>}/>
        <Route path="/patient-dashboard/about-hospital" element={<Abouthospital/>}/>

        <Route path="/departmentpage" element={<Departments/>}/>

        <Route path="/appointmentpage" element={<Appointmentpage/>}/>
        




      </Routes>
    </Router>
  );
};

export default App;