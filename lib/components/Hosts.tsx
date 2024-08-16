"use client";
import { FC } from "react";

import { chapters } from "@/lib/data";

import { Avatar, Box, Container, SimpleGrid, Text, Link } from "@chakra-ui/react";

interface HostsProps {
  data?: any;
}

const Hosts: FC<HostsProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0" py="5vh">
      <Text sx={styles.heading}>Hosted by your local chapters</Text>
      <SimpleGrid columns={{ base: 2, lg: 3 }} alignItems="center">
        {chapters.map((chapter, chapterIndex) => (
          <Box sx={styles.hostContainer} key={chapterIndex}>
            <Avatar size="2xl" name={chapter.city} />
            {chapter.social.map((social, socialIndex) => (
              <Link
                href={social.url}
                target="_blank"
                key={socialIndex}>
                <Text sx={styles.hostName}>{chapter.name}</Text>
              </Link>
            ))}
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const styles = {
  heading: {
    mx: "auto",
    width: "fit-content",
    textAlign: "center",
    background: "green.pastel",
    fontSize: { base: "2xl", sm: "3xl", lg: "4xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "green.core",
      color: "white",
      border: "4px solid white",
    },
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
