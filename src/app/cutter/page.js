"use client";

import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Divider,
  Group,
  Anchor,
} from "@mantine/core";

function page() {
  return (
    <Container
      size="xl"
      width="100%"
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#1c1c26", // Set the background color to dark gray
        color: "white", // Ensure text color is white
      }}
    >
      <Container style={{ textAlign: "center", padding: "2rem" }}>
        <Group
          mt="md"
          spacing="lg"
          position="center"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          <Anchor href="#how-it-works" color="white" weight={500}>
            How it Works
          </Anchor>
          <Anchor href="/joiner" color="white" weight={500}>
            Joiner
          </Anchor>
        </Group>
        <Title order={2} color="white">
          Audio Cutter
        </Title>
        <Text size="lg" mt="sm" color="white">
          Free editor to trim and cut any audio file online
        </Text>
        <Button variant="outline" mt="md" style={{ borderRadius: "50%" }}>
          Edit Your Audio
        </Button>
      </Container>

      <Divider my="md" />

      <Text mt="md">
        This app can be used to trim and/or cut audio tracks, remove audio
        fragments, and fade in and fade out your music easily to make the audio
        harmoniously.
      </Text>

      <Text mt="md">
        It is fast and easy to use. You can save the audio file in any format
        (codec parameters are configured).
      </Text>

      <Text mt="md">
        It works directly in the browser; no need to install any software, and
        it is available for mobile devices.
      </Text>

      <Text mt="md" weight={500}>
        Privacy and Security Guaranteed
      </Text>

      <Text>
        This is a serverless app. Your files do not leave your device.
      </Text>

      <Divider my="md" />
    </Container>
  );
}

export default page;
