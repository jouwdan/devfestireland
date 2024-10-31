"use client";
import { FC } from "react";

import {
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

interface SponsorsProps {
  data?: any;
}

interface Sponsor {
  name: string;
  url: string;
  logo: string;
  description?: string;
}

import { sponsors } from "@/lib/data";

const Sponsors: FC<SponsorsProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="0" py="5vh">
      <Text sx={styles.heading}>Our Sponsors</Text>
      <Text sx={styles.tierTitle}>Tier 1</Text>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={2}
        maxW={{ base: "100%", lg: "800px" }}
        w="100%"
        mx="auto"
        justifyItems="center"
        p={0}
      >
        {sponsors.t1.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <Card sx={styles.sponsorContainer} key={sponsor.name}>
              <CardBody>
                <Image alt={sponsor.name} src={sponsor.logo} maxWidth="250px" />
              </CardBody>
            </Card>
          </Link>
        ))}
      </Grid>
      <Text sx={styles.tierTitle}>Tier 2</Text>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={2}
        maxW={{ base: "100%", lg: "800px" }}
        w="100%"
        mx="auto"
        justifyItems="center"
        p={0}
      >
        {sponsors.t2.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <Card sx={styles.sponsorContainer}>
              <CardBody>
                <Image alt={sponsor.name} src={sponsor.logo} maxWidth="250px" />
              </CardBody>
            </Card>
          </Link>
        ))}
      </Grid>
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
  tierTitle: {
    mx: "auto",
    w: "fit-content",
    textAlign: "center",
    background: "blue.pastel",
    fontSize: { base: "xl", sm: "2xl", lg: "2xl", "2xl": "4xl" },
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
