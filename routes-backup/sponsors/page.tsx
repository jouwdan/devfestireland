"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { sponsors } from "@/lib/data";

import { Link } from "@chakra-ui/next-js";

export default function Sponsors() {
  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading} my="10px">
        Sponsors
      </Text>
      <Text sx={styles.subheading}>Tier 1</Text>
      <SimpleGrid columns={{ base: 1, lg: 3, "2xl": 4 }} spacingX={4} pb="4vh">
        {sponsors.t1.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <Card sx={styles.sponsorContainer} key={sponsor.name} h="full">
              <CardBody>
                <Image
                  alt={sponsor.name}
                  src={sponsor.logo}
                  maxWidth="250px"
                  mx="auto"
                />
                <Text mt="20px">{sponsor.description}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>

      <Text sx={styles.subheading}>Tier 2</Text>
      <SimpleGrid columns={{ base: 1, lg: 3, "2xl": 4 }} spacing={4}>
        {sponsors.t2.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <Card sx={styles.sponsorContainer} key={sponsor.name} h="full">
              <CardBody>
                <Image
                  alt={sponsor.name}
                  src={sponsor.logo}
                  maxWidth="250px"
                  mx="auto"
                />
                <Text mt="20px">{sponsor.description}</Text>
              </CardBody>
            </Card>
          </Link>
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
  sponsorContainer: {
    p: "10px",
    m: "10px",
    boxShadow: "none",
    borderRadius: "24px",
    border: "4px solid black",
    _dark: {
      border: "4px solid white",
    },
  },
  subheading: {
    w: "fit-content",
    background: "yellow.pastel",
    fontSize: { base: "xl", sm: "2xl", lg: "3xl", "2xl": "4xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "yellow.core",
      color: "white",
      border: "4px solid white",
    },
  },
};
