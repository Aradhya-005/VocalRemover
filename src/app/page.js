"use client";

import { useState, useEffect } from "react";
import { Container, Text, Affix, Box } from "@mantine/core";
import Image from "next/image";
import main from "../assets/main.png";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      mt="60px"
      style={{
        backgroundColor: "#17171e", // Set the background color
        color: "white",
        minHeight: "100vh",
        width: "100%", // Ensure full width
        padding: "70px 0", // Optional: remove padding
      }}
    >
      {/* Fixed Link when Scrolling */}
      <Affix
        position={{ top: 20, right: 20 }}
        style={{
          display: isScrolled ? "flex" : "none", // Change to flex when visible
          alignItems: "center",
          justifyContent: "center", // Center horizontally
          height: "50px", // Set a height for vertical centering
        }}
      >
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          How It Works
        </a>
      </Affix>

      {/* First Container - Centered */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 0  60px 0 ", // Optional: remove padding
        }}
      >
        <Text
          style={{
            alignItems: "center",
            fontSize: "21px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
          size="xl"
          weight={700}
          mb="md"
          id="how-it-works"
        >
          How It Works
        </Text>
        <Text
          style={{
            fontSize: "55px", // Custom font size
            fontWeight: 600,
            marginBottom: "10px", // Bold text
          }}
        >
          Vocal Remover and Isolation
        </Text>
        <Text
          style={{
            fontSize: "25px", // Custom font size
            fontWeight: 400,
            marginBottom: "10px", // Bold text
          }}
        >
          Separate voice from music out of a song free with powerful AI
          algorithms
        </Text>

        <Box style={{ padding: "50px", backgroundColor: "#17171e" }}>
          <Image src={main} alt="hero-img" />
        </Box>
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

      {/* Add a thin line between the sections */}
      <div
        style={{
          borderBottom: "1px solid #737373", // Thin purple line
          width: "100%", // Full width
          margin: "30px 0", 
        }}
      ></div>

      {/* Second Container - Left Aligned with Purple Left Border */}
      <Container
        style={{
          width: "100%",
          padding: "100px 0",
        }}
      >
        <Text
          style={{
            fontSize: "35px", // Custom font size
            fontWeight: 600,
            marginBottom: "15px", // Bold text
          }}
          size="lg"
          weight={700}
        >
          Remove vocals from a song
        </Text>
        <Container
          style={{
            borderLeft: "2px solid #665DC3",
            padding: "30px",
            backgroundColor: "#1c1c26",
            marginTop: "20px",
          }}
        >
          <Text
            style={{
              fontSize: "22px", // Custom font size
              fontWeight: 400,
              marginBottom: "15px", // Bold text
            }}
          >
            This free online application will help remove vocals from a song by
            creating karaoke.
          </Text>
          <Text
            style={{
              fontSize: "22px", // Custom font size
              fontWeight: 400,
              marginBottom: "15px", // Bold text
            }}
          >
            Once you choose a song, artificial intelligence will separate the
            vocals from the instrumental ones. You will get two tracks - a
            karaoke version of your song (no vocals) and an acapella version
            (isolated vocals).
          </Text>
          <Text
            style={{
              fontSize: "22px", // Custom font size
              fontWeight: 400,
              marginBottom: "10px", // Bold text
            }}
          >
            Despite the complexity and high cost of service, you can use it
            absolutely free. Processing usually takes about 10 seconds.
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
