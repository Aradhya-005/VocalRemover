"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileInput } from "@mantine/core";

import { useState, useEffect, useRef } from "react";
import { Container, Text, Affix, Button, Box } from "@mantine/core";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [error, setError] = useState("");
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
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];
      if (file) {
        const validTypes = [
          "audio/mp3",
          "audio/wav",
          "audio/ogg",
          "audio/mpeg",
        ];
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
        backgroundColor: "#17171e",
        color: "white",
        minHeight: "100vh",
        width: "100%",
        padding: "70px 0",
      }}
    >
      {/* Fixed Link when Scrolling */}
      <Affix
        position={{ top: 20, left: "43% " }}
        style={{
          display: isScrolled ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
        }}
      >
        <a
          href="#"
          style={{
            marginRight: "30px",
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          How It Works
        </a>
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
          Joiner
        </a>
      </Affix>

      {/* First Container - Centered */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 0  130px 0 ", // Optional: remove padding
        }}
      >
        <Container
          style={{
            padding: "30px 0 ",
            gap: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <Text
            style={{
              fontSize: "20px",
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
              fontSize: "20px",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            size="xl"
            weight={700}
            id="joiner"
          >
            Joiner
          </Link>
        </Container>
        <Text
          style={{
            fontSize: "55px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Audio Cutter
        </Text>
        <Text
          style={{
            fontSize: "25px",
            fontWeight: 400,
            marginBottom: "10px",
          }}
        >
          Free editor to trim and cut any audio file online
        </Text>
        <button
          onClick={handleFileInputClick}
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

        <FileInput
          accept="audio/*"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
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
            fontSize: "35px",
            fontWeight: 600,
            marginBottom: "15px",
          }}
          size="lg"
          weight={400}
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
              fontSize: "22px",
              fontWeight: 400,
              marginBottom: "15px",
            }}
          >
            This app can be used to trim and/or cut audio tracks, remove an
            audio fragments. Fade in and fade out your music easily to make the
            audio harmoniously.
          </Text>
          <Text
            style={{
              fontSize: "22px",
              fontWeight: 400,
              marginBottom: "15px",
            }}
          >
            It fast and easy to use. You can save the audio file in any format
            (codec parameters are configured)
          </Text>
          <Text
            style={{
              fontSize: "22px",
              fontWeight: 400,
              marginBottom: "10px",
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
            fontSize: "30px", 
            fontWeight: 600,
            marginBottom: "15px", 
            display: "flex", 
            alignItems: "center", 
          }}
          size="lg"
          weight={400}
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
              fontSize: "22px", 
              fontWeight: 400,
              marginBottom: "15px", 
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
