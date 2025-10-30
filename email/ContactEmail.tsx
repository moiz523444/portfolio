// emails/ContactEmail.tsx
import * as React from "react";
import { Html, Body, Container, Heading, Text } from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Body
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f6f9fc",
        padding: "20px",
      }}
    >
      <Container
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Heading style={{ color: "#333" }}>New Contact Form Submission</Heading>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Message:</strong> {message}
        </Text>
        <Text>
          Website: <a href="https://finnovator.com.sa/">finnovator.com.sa</a>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;
