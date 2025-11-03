import React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f6f9fc",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#333" }}>New Contact Form Submission</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
        <p>
          Website:{" "}
          <a href="https://finnovator.com.sa/" target="_blank" rel="noreferrer">
            finnovator.com.sa
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactEmail;
