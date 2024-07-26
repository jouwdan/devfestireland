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

const organizerList = [
  {
    name: "Jordan Harrison",
    role: "Software Developer, Charles River Labs",
    chapter: "GDG Portlaoise",
    image: "/images/jordan-harrison.jpg",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jouwdan/",
      },
      {
        name: "GitHub",
        url: "https://github.com/jouwdan",
      },
    ],
  },
];

export default function Organizers() {
  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading}>Meet the Organizers</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }} spacing={10}>
        {organizerList.map((organizer, index) => (
          <Card sx={styles.organizerContainer} key={index}>
            <CardBody>
              <Avatar
                size={{ base: "lg", lg: "2xl" }}
                name={organizer.name}
                src={organizer.image}
              />
              <Text fontSize="3xl" mt="20px" fontWeight="700">
                {organizer.name}
              </Text>
              <Text fontSize="xl" my="10px">
                {organizer.role}
              </Text>
              <Text fontSize="xl">{organizer.chapter}</Text>
              <Box mt="10px">
                {organizer.social.map((social, index) => (
                  <Link
                    href={social.url}
                    target="_blank"
                    key={index}
                    p="4px"
                    textDecor="underline">
                    {social.name}
                  </Link>
                ))}
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
  organizerContainer: {
    alignContent: "center",
    textAlign: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: { base: "20px", lg: "40px" },
    m: "20px",
    boxShadow: "none",
    borderRadius: "24px",
    border: "4px solid black",
    _dark: {
      background: "grayscale.black",
      border: "4px solid white",
    },
  },
};
