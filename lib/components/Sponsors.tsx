"use client";
import { FC } from "react";

import {
  Avatar,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface SponsorsProps {
  data?: any;
}

const t1sponsors = [
  {
    name: "TBC",
    url: "#",
    logo: "https://www.example.com/logo.png",
  },
  {
    name: "TBC",
    url: "#",
    logo: "https://www.example.com/logo.png",
  },
];

const t2sponsors = [
  {
    name: "TBC",
    url: "#",
    logo: "https://www.example.com/logo.png",
  },
  {
    name: "TBC",
    url: "#",
    logo: "https://www.example.com/logo.png",
  },
  {
    name: "TBC",
    url: "#",
    logo: "https://www.example.com/logo.png",
  },
];

const Sponsors: FC<SponsorsProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0" py="5vh">
      <Text sx={styles.heading}>Our Sponsors</Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="center"
        w={{ base: "100vw", lg: "50vw" }}
        mx="auto">
        {t1sponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name}>
            <Card sx={styles.sponsorContainer} key={sponsor.name}>
              <CardBody>
                <Avatar size="lg" name={sponsor.name} src={sponsor.logo} />
              </CardBody>
            </Card>
          </Link>
        ))}
      </Flex>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="center"
        w={{ base: "100vw", lg: "75vw" }}
        mx="auto">
        {t2sponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name}>
            <Card sx={styles.sponsorContainer} key={sponsor.name}>
              <CardBody>
                <Avatar size="lg" name={sponsor.name} src={sponsor.logo} />
              </CardBody>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

const styles = {
  heading: {
    mx: "auto",
    mb: "20px",
    width: "fit-content",
    textAlign: "center",
    background: "yellow.pastel",
    fontSize: { base: "2xl", sm: "3xl", lg: "4xl" },
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
  sponsorContainer: {
    alignContent: "center",
    textAlign: "center",
    px: { base: "40px", lg: "40px", "2xl": "60px" },
    py: "20px",
    m: "20px",
    boxShadow: "none",
    borderRadius: "24px",
  },
  sponsorName: {
    mt: "20px",
    fontSize: { base: "2xl", lg: "3xl", "2xl": "4xl" },
  },
};

export { Sponsors };
