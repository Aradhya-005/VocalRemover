"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileInput } from "@mantine/core";

import { useState, useEffect, useRef } from "react";
import { Container, Text, Affix, Button, Box } from "@mantine/core";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [error, setError] = useState(""); // State for error message
  const fileInputRef = useRef(null);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Check if event and event.target are defined
    if (event && event.target && event.target.files) {
        const file = event.target.files[0];
        if (file) {
            const validTypes = ["audio/mp3", "audio/wav", "audio/ogg", "audio/mpeg"]; // Add valid audio MIME types
            if (validTypes.includes(file.type)) {
                setError(""); // Clear error message if file type is valid
                console.log("Selected file:", file);
            } else {
                setError("Please select compatible audio files (MP3, WAV, OGG).");
            }
        }
    } else {
        setError("No file selected.");
    }
  };

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

      {/* Link at the Start */}

      {/* First Container - Centered */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 0  130px 0 ", // Optional: remove padding
        }}
      >
        <Container
          style={{
            gap: "30px",
            display: "flex", // Use flexbox for layout
            alignItems: "center", // Center items vertically
            justifyContent: "space-between", // Adjust spacing between items
            marginBottom: "20px", // Add margin if needed
          }}
        >
          <Text
            style={{
              fontSize: "21px",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            size="xl"
            weight={700}
            id="how-it-works"
          >
            How It Works
          </Text>
          <Link
            href="/joiner"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "21px",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            size="xl"
            weight={700}
            id="joiner" // Change ID to be unique
          >
            Joiner
          </Link>
        </Container>
        <Text
          style={{
            fontSize: "55px", // Custom font size
            fontWeight: 600,
            marginBottom: "20px", // Bold text
          }}
        >
          Audio Cutter
        </Text>
        <Text
          style={{
            fontSize: "25px", // Custom font size
            fontWeight: 400,
            marginBottom: "10px", // Bold text
          }}
        >
          Free editor to trim and cut any audio file online
        </Text>
        <button
                  onClick={handleFileInputClick}

          style={{
            marginTop: "20px",
            width: "200px",
            padding:"10px 0px",
            borderRadius: "50px", // Rounded corners
            backgroundColor: "#17171e", // Background color
            border: "2px solid #665DC3", // Border color
            color: "white", // Text color
            fontSize: "18px", // Set font size
          }}
        >
          Browse my files
        </button>
        
        <FileInput
          accept="audio/*"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange} // Handle file selection
          style={{ display: "none" }}
        />
      </Container>

      {/* Second Container - Left Aligned with Purple Left Border */}
      <Container
        style={{
          width: "100%",
          padding: "100px 0 30px 0",
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
          How to cut audio
        </Text>
        <Container
          style={{
            borderLeft: "2px solid #665DC3",
            padding: "20px",
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
            This app can be used to trim and/or cut audio tracks, remove an
            audio fragments. Fade in and fade out your music easily to make the
            audio harmoniously.
          </Text>
          <Text
            style={{
              fontSize: "22px", // Custom font size
              fontWeight: 400,
              marginBottom: "15px", // Bold text
            }}
          >
            It fast and easy to use. You can save the audio file in any format
            (codec parameters are configured)
          </Text>
          <Text
            style={{
              fontSize: "22px", // Custom font size
              fontWeight: 400,
              marginBottom: "10px", // Bold text
            }}
          >
            It works directly in the browser, no needs to install any software,
            is available for mobile devices.
          </Text>
        </Container>
      </Container>
      <Container
        style={{
          width: "100%",
          padding: "0",
        }}
      >
        <Text
          style={{
            fontSize: "30px", // Custom font size
            fontWeight: 600,
            marginBottom: "15px", // Bold text
            display: "flex", // Flexbox for alignment
            alignItems: "center", // Center the icon and text vertically
          }}
          size="lg"
          weight={700}
        >
          <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />{" "}
          {/* Lock icon */}
          Privacy and Security Guaranteed
        </Text>
        <Container
          style={{
            borderLeft: "2px solid #665DC3",
            padding: "20px",
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
            This is serverless app. Your files does not leave your device
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
