"use client";

import ButtonComponent from "@/components/ButtonComponent";
import { Container, Text, Button } from "@mantine/core";

const Home = () => {
  return (
    <Container
      mt="60px"
      style={{
        backgroundColor: "#17171e", // Set the background color
        color: "white",
        minHeight: "100vh",
        display: "flex", // Enable flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        width: "100%", // Ensure full width
        padding: "70px 0", // Optional: remove padding
      }}
    >
      {/* First Container - Centered */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 0 130px 0", // Optional: remove padding
        }}
      >
        <Text
          style={{
            fontSize: "55px", // Custom font size
            fontWeight: 600,
            marginBottom: "20px", // Bold text
          }}
        >
          Audio Joiner
        </Text>
        <Text
          style={{
            fontSize: "25px", // Custom font size
            fontWeight: 400,
            marginBottom: "10px", // Bold text
          }}
        >
          Join multiple audio tracks into one. Choose audio files you want to
          merge
        </Text>

        <button
          style={{
            marginTop: "20px",
            width: "200px",
            padding: "10px 0px",
            borderRadius: "50px", // Rounded corners
            backgroundColor: "#17171e", // Background color
            border: "2px solid #665DC3", // Border color
            color: "white", // Text color
            fontSize: "18px", // Set font size
          }}
        >
          Browse my files
        </button>
      </Container>
    </Container>
  );
};

export default Home;
