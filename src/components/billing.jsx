import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import '../cssComponent/BillingPage.css';


const Billing = () => {
  // State for selectable services
  const [services, setServices] = useState([
    { id: 1, name: 'CT Scan', category: 'Radiology', cost: 5000, selected: false },
    { id: 2, name: 'MRI', category: 'Radiology', cost: 8200, selected: false },
    { id: 3, name: 'Sonography', category: 'Diagnostic', cost: 1800, selected: false },
    { id: 4, name: 'ECG', category: 'Cardiology', cost: 900, selected: false },
    { id: 5, name: 'Lab Test', category: 'Pathology', cost: 800, selected: false },
  ]);

  const previousBills = [
    { date: '04/20/2024', desc: 'Lab Test', amount: '₹ 800.00', status: 'Paid' },
    { date: '03/17/2024', desc: 'Radiology', amount: '₹ 800.00', status: 'Unpaid' },
    { date: '02/25/2024', desc: 'Pharmacy', amount: '₹ 200.00', status: 'Paid' },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const toggleService = (id) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, selected: !s.selected } : s
    ));
  };

  const totalAmount = services
    .filter(s => s.selected)
    .reduce((sum, s) => sum + s.cost, 0);

    const [showPayment, setShowPayment] = useState(false);


  return (
    <>
    <div className="billing-container">
      <header className="billing-header">
        <h1>Billing</h1>
        
        {/* Requested Back Button Code */}
        <Button
          onClick={handleBack}
          sx={{
            marginLeft: "auto", // Responsive alignment
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

      <section className="section-box">
        <h3>Select Services</h3>
        <div className="table-wrapper">
          <table className="selection-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Cost (₹)</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className={service.selected ? 'selected-row' : ''}>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={service.selected} 
                      onChange={() => toggleService(service.id)} 
                    />
                  </td>
                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>₹ {service.cost.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="payment-summary">
        <div className="total-box">
          Total Amount: <span>₹ {totalAmount.toLocaleString()}</span>
        </div>
        <button
  className="btn-proceed"
  disabled={totalAmount === 0}
  onClick={() => setShowPayment(true)}
>
  Proceed to Pay
</button>

      </div>

      <section className="section-box">
        <h3>Previous Bills</h3>
        <div className="table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {previousBills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.date}</td>
                  <td>{bill.desc}</td>
                  <td>{bill.amount}</td>
                  <td>
                    <span className={`status-tag ${bill.status.toLowerCase()}`}>
                      {bill.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

{showPayment && (
  <div className="payment-overlay">
    <div className="payment-modal">
      <h2>Pay Bill</h2>

      <div className="amount-circle">₹ {totalAmount.toLocaleString()}</div>

      <div className="upi-grid">
        <button>PhonePe</button>
        <button>GPay</button>
        <button>BharatPe</button>
        <button>BHIM UPI</button>
      </div>

      <input
        type="text"
        placeholder="Enter UPI ID eg:9142060041@ybl"
        className="upi-input"
      />

      <button className="pay-btn">Pay</button>

      <button
        className="close-btn"
        onClick={() => setShowPayment(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}


    </div>
    </>
  );
};

export default Billing;