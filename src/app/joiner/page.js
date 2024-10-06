import React from 'react'
import { Container, Title, Text, Button, Divider, Group, Anchor } from "@mantine/core";

function page() {
  return (
    <Container size="lg" mt="lg">
      <Title order={2}>Audio Joiner</Title>
      <Text size="lg" mt="sm">
        Free editor to join multiple audio files into one.
      </Text>

      <Divider my="md" />

      <Text mt="md">
        This app can be used to join multiple audio tracks into a single file. Simply upload the audio files you want to merge, and we’ll handle the rest.
      </Text>

      <Text mt="md">
        It’s fast and easy to use. You can save the joined audio file in any format (codec parameters are configured).
      </Text>

      <Text mt="md">
        It works directly in the browser; no need to install any software, and it's available for mobile devices.
      </Text>

      <Text mt="md" weight={500}>
        Privacy and Security Guaranteed
      </Text>

      <Text>
        This is a serverless app. Your files do not leave your device.
      </Text>

      <Button variant="outline" mt="md">Join Your Audio</Button>

      <Divider my="md" />

      <Group mt="md" spacing="lg">
        <Anchor href="#how-it-works" color="blue" weight={500}>
          How it Works
        </Anchor>
        <Anchor href="/cutter" color="blue" weight={500}>
          Audio Cutter
        </Anchor>
      </Group>
    </Container>
  )
}

export default page