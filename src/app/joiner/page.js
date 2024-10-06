"use client";

import { Container, Text, Button } from "@mantine/core";

const Home = () => {
  return (
    <Container
      mt="60px"
      style={{
        backgroundColor: "#17171e", 
        color: "white",
        minHeight: "100vh",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        padding: "70px 0", 
      }}
    >
      {/* First Container - Centered */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 0 130px 0", 
        }}
      >
        <Text
          style={{
            fontSize: "55px", 
            fontWeight: 600,
            marginBottom: "20px", 
          }}
        >
          Audio Joiner
        </Text>
        <Text
          style={{
            fontSize: "25px", 
            fontWeight: 400,
            marginBottom: "10px", 
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
            borderRadius: "50px", 
            backgroundColor: "#17171e", 
            border: "2px solid #665DC3", 
            color: "white", 
            fontSize: "18px", 
          }}
        >
          Browse my files
        </button>
      </Container>
    </Container>
  );
};

export default Home;
