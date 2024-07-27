"use client";
import { FC } from "react";

import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface WelcomeProps {
  data?: any;
}

const Welcome: FC<WelcomeProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0">
      <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center">
        <Box sx={styles.headingContainer}>
          <Text sx={styles.heading}>Welcome to DevFest Ireland 2024</Text>
        </Box>
        <Box sx={styles.descriptionContainer}>
          <Text sx={styles.description}>
            DevFest Ireland is one of the largest community-driven tech events
            in Ireland, uniting developers & tech enthusiasts from GDGs across
            the country under one roof.
            <br /> <br />
            This year&apos;s DevFest, taking place in Ulster University in
            Belfast, promises to be an extraordinary celebration of technology,
            innovation, and community. Whether you&apos;re a seasoned developer,
            a tech enthusiast, or someone just starting out in the tech
            industry, DevFest Ireland 2024 has something for you. It's an
            opportunity to learn, grow, and be part of something bigger.
            <br /> <br />
            We can&apos;t wait to see you there. Together, let&apos;s make
            DevFest Ireland 2024 an unforgettable experience!
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

const styles = {
  headingContainer: {
    minHeight: { base: "30vh", lg: "60vh", "2xl": "50vh" },
    alignContent: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    bg: "blue.pastel",
    w: { base: "100%", lg: "50%" },
    _dark: {
      bg: "blue.core",
    },
  },
  heading: {
    fontSize: { base: "4xl", lg: "6xl", "2xl": "7xl" },
    fontWeight: "700",
    lineHeight: "1.2",
  },
  descriptionContainer: {
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: { base: "40px", lg: "40px" },
    bg: "grayscale.white",
    flex: "1",
    _dark: {
      bg: "grayscale.black",
    },
  },
  description: {
    fontSize: { base: "lg", lg: "xl", "2xl": "2xl" },
    textAlign: "justify",
  },
};

export { Welcome };
