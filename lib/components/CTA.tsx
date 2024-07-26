"use client";
import { FC } from "react";

import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface CTAProps {
  data?: any;
}

const CTA: FC<CTAProps> = ({ data }) => {
  return (
    <Container sx={styles.container}>
      <Flex alignItems="center" flexDir={{ base: "column", lg: "row" }}>
        <Text sx={styles.ctaText}>
          Join us on Saturday 16th November at Ulster University
        </Text>
        <Link
          href="https://gdg.community.dev/events/details/google-gdg-belfast-presents-devfest-ireland-2024"
          target="_blank"
          textDecor="none">
          <Button variant="unstyled" size="lg" sx={styles.ctaButton}>
            Get Your Ticket
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

const styles = {
  container: {
    maxW: "1920px",
    px: "20px",
    py: "5vh",
    bg: "white",
    _dark: {
      bg: "black",
    },
  },
  ctaText: {
    fontSize: { base: "3xl", "2xl": "4xl" },
    fontWeight: "700",
    flex: "1",
    mb: { base: "30px", lg: "0" },
  },
  ctaButton: {
    w: { base: "80vw", lg: "auto" },
    h: "auto",
    p: "20px",
    fontSize: { base: "2xl", lg: "3xl", "2xl": "4xl" },
    fontWeight: "700",
    borderRadius: "9999px",
    bg: "yellow.pastel",
    border: "4px solid black",
    _hover: {
      bg: "yellow.halftone",
    },
    _dark: {
      bg: "yellow.core",
      border: "4px solid white",
      _hover: {
        bg: "yellow.halftone",
      },
    },
  },
};

export { CTA };
