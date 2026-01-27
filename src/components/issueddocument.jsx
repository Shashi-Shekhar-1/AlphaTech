

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import '../cssComponent/IssuedDocument.css';


const Document = () => {
  const [documents, setDocuments] = useState([
    { name: "X-Ray Report.docs", type: "X-Ray", date: "03/15/2024", uploadedBy: "Dr. Adams" },
    { name: "Lab Report.pdf", type: "Lab", date: "02/28/2024", uploadedBy: "Dr. Smith" },
    { name: "Medical Certificate.pdf", type: "Medical", date: "01/22/2024", uploadedBy: "Nurse Johnson" },
    { name: "Diagnostic Report.pdf", type: "Vaccine", date: "12/03/2023", uploadedBy: "Dr. Brown" },
  ]);

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  // Open file picker
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle real file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const newDocument = {
      name: file.name,
      type: file.type.split("/")[1]?.toUpperCase() || "FILE",
      date: new Date().toLocaleDateString(),
      uploadedBy: "You",
      fileUrl: URL.createObjectURL(file),
    };

    setDocuments((prev) => [newDocument, ...prev]);
    event.target.value = ""; // reset input
  };

   const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container1">
      <main className="main-content">
        <header className="content-header">
         
          <h1 className="front">Issued Documents</h1>
          
        </header>
         <Button
        onClick={handleBack}
        sx={{
          marginLeft:"92%",
          marginTop:"-10%",
          marginBottom:"10px",
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

        <section className="document-card">
          <button className="btn-upload" onClick={handleUploadClick}>
            <span className="plus-icon">+</span> Upload Document
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            onChange={handleFileChange}
          />

          <div className="drag-drop-zone">
            <p>Drag files here or click to upload</p>
            <span>PDF, DOCX, JPG, PNG</span>
          </div>

          <div className="category-grid">
            <button className="category-btn"><span>🩻</span> X-Ray Report</button>
            <button className="category-btn"><span>🧪</span> Lab Report</button>
            <button className="category-btn"><span>📑</span> Medical Certificate</button>
            <button className="category-btn"><span>📝</span> Diagnostic Report</button>
            <button className="category-btn"><span>💉</span> Vaccine Certificate</button>
            <button className="category-btn"><span>💉</span> Blood Report</button>
            <button className="category-btn"><span>💉</span> Sonography</button>
          </div>

          <div className="table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Type</th>
                  <th>Date Issued</th>
                  <th>Uploaded By</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td>
                      {doc.fileUrl ? (
                        <a href={doc.fileUrl} target="_blank" rel="noreferrer">
                          {doc.name}
                        </a>
                      ) : (
                        doc.name
                      )}
                    </td>
                    <td>{doc.type}</td>
                    <td>{doc.date}</td>
                    <td>{doc.uploadedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Document;