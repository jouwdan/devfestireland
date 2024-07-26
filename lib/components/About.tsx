"use client";
import { FC } from "react";

import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

interface AboutProps {
  data?: any;
}

const About: FC<AboutProps> = ({ data }) => {
  return (
    <Container maxW="1920px" p="0">
      <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems="center">
        <Box sx={styles.headingContainer}>
          <Text sx={styles.heading}>What is DevFest?</Text>
        </Box>
        <Box sx={styles.descriptionContainer}>
          <Text sx={styles.description}>
            DevFests are local tech conferences hosted by Google Developer
            Groups (GDG) around the world. Each DevFest event is crafted by its
            local organizers to fit the needs and interests of its local
            developer community. Whether it be through hands-on learning
            experiences, technical talks delivered in local languages by
            experts, or by simply meeting fellow local developers, DevFest
            attendees learn how to build together and innovate on Google's
            developer tools.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const styles = {
  headingContainer: {
    minHeight: { base: "20vh", lg: "40vh", "2xl": "30vh" },
    alignContent: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    bg: "blue.pastel",
    _dark: {
      bg: "blue.core",
    },
  },
  heading: {
    fontSize: { base: "4xl", lg: "6xl", "2xl": "7xl" },
    fontWeight: "700",
  },
  descriptionContainer: {
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: { base: "40px", lg: "40px" },
    bg: "grayscale.white",
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
