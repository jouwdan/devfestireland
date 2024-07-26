"use client";

import { Container, Text } from "@chakra-ui/react";

export default function Agenda() {
  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading}>Agenda</Text>
      <Text fontSize="2xl" mt="20px">
        Coming soon!
      </Text>
    </Container>
  );
}

const styles = {
  heading: {
    w: "fit-content",
    textAlign: "center",
    background: "blue.pastel",
    fontSize: { base: "2xl", sm: "3xl", lg: "4xl", "2xl": "5xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "blue.core",
      color: "white",
      border: "4px solid white",
    },
  },
};
