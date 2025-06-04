"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { speakers } from "@/lib/data";

export default function Speakers() {
  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading}>Speakers</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
        spacing={10}
        my="20px">
        {speakers.map((speaker, index) => (
          <Card sx={styles.speakerContainer} key={index}>
            <CardBody>
              <Avatar
                size={{ base: "lg", lg: "2xl" }}
                name={speaker.FirstName + " " + speaker.LastName}
                src={speaker.image}
              />
              <Text fontSize="3xl" mt="20px" fontWeight="700">
                {speaker.FirstName + " " + speaker.LastName}
              </Text>
              <Text fontSize="xl" my="10px">
                {speaker.Title}
              </Text>
              <Text fontSize="lg">{speaker.TagLine}</Text>
              <Box mt="10px">
                {speaker.X && (
                  <Link
                    href={speaker.X}
                    target="_blank"
                    p="4px"
                    textDecor="underline">
                    X
                  </Link>
                )}
                {speaker.LinkedIn && (
                  <Link
                    href={speaker.LinkedIn}
                    target="_blank"
                    p="4px"
                    textDecor="underline">
                    LinkedIn
                  </Link>
                )}
                {speaker.Instagram && (
                  <Link
                    href={speaker.Instagram}
                    target="_blank"
                    p="4px"
                    textDecor="underline">
                    Instagram
                  </Link>
                )}
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
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
  speakerContainer: {
    alignContent: "center",
    textAlign: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: { base: "20px", lg: "40px" },
    boxShadow: "none",
    borderRadius: "24px",
    border: "4px solid black",
    _dark: {
      background: "grayscale.black",
      border: "4px solid white",
    },
  },
};
