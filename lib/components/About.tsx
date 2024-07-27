"use client";
import { FC } from "react";

import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";

interface AboutProps {
  data?: any;
}

const About: FC<AboutProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0">
      <Flex flexDir={{ base: "column-reverse", lg: "row" }} alignItems="center">
        <Box sx={styles.descriptionContainer}>
          <Text sx={styles.description}>
            DevFests are local tech conferences hosted by Google Developer
            Groups around the world. Each DevFest event is crafted by local
            organizers to fit the needs and interests of its local developer
            community. Whether it be through hands-on learning experiences,
            technical talks delivered in local languages by experts, or by
            simply meeting fellow local developers, DevFest attendees learn how
            to build together and innovate on Google&apos;s developer tools.
          </Text>
        </Box>
        <Box sx={styles.headingContainer}>
          <Text sx={styles.heading}>What is DevFest?</Text>
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
    bg: "red.pastel",
    w: { base: "100%", lg: "50%" },
    _dark: {
      bg: "red.core",
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

export { About };
