"use client";
import { FC } from "react";

import { Avatar, Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { text } from "stream/consumers";

interface HostsProps {
  data?: any;
}

const Hosts: FC<HostsProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0" py="50px">
      <Text sx={styles.heading}>Hosted by your local chapters</Text>
      <SimpleGrid columns={{ base: 2, lg: 5 }} alignItems="center">
        <Box sx={styles.hostContainer}>
          <Avatar size="2xl" name="Belfast" />
          <Text sx={styles.hostName}>GDG Belfast</Text>
        </Box>
        <Box sx={styles.hostContainer}>
          <Avatar size="2xl" name="Dublin" />
          <Text sx={styles.hostName}>GDG Dublin</Text>
        </Box>
        <Box sx={styles.hostContainer}>
          <Avatar size="2xl" name="Galway" />
          <Text sx={styles.hostName}>GDG Galway</Text>
        </Box>
        <Box sx={styles.hostContainer}>
          <Avatar size="2xl" name="Athlone" />
          <Text sx={styles.hostName}>GDG Athlone</Text>
        </Box>
        <Box sx={styles.hostContainer}>
          <Avatar size="2xl" name="Portlaoise" />
          <Text sx={styles.hostName}>GDG Portlaoise</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const styles = {
  heading: {
    fontSize: { base: "3xl", lg: "4xl", "2xl": "5xl" },
    fontWeight: "700",
    textAlign: "center",
  },
  hostContainer: {
    minHeight: "20vh",
    alignContent: "center",
    textAlign: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: { base: "40px", lg: "40px" },
    bg: "grayscale.white",
    _dark: {
      bg: "grayscale.black",
    },
  },
  hostName: {
    mt: "20px",
    fontSize: { base: "xl", lg: "2xl", "2xl": "3xl" },
  },
};

export { Hosts };
