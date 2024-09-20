"use client";
import { FC } from "react";

import { Card, CardBody, Container, Flex, Image, Text } from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

interface SponsorsProps {
  data?: any;
}

interface Sponsor {
  name: string;
  url: string;
  logo: string;
}

const t1sponsors: Sponsor[] = [
  {
    name: "Google Developers",
    url: "https://developers.google.com/",
    logo: "/images/sponsors/google_developers.png",
  },
  {
    name: "DailyPay",
    url: "https://www.dailypay.com/",
    logo: "/images/sponsors/DailyPay.png",
  },
];

const t2sponsors: Sponsor[] = [];

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
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <Card sx={styles.sponsorContainer} key={sponsor.name}>
              <CardBody>
                <Image alt={sponsor.name} src={sponsor.logo} maxWidth="250px" />
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
        {t2sponsors.length > 0 &&
          t2sponsors.map((sponsor) => (
            <Link href={sponsor.url} key={sponsor.name} target="_blank">
              <Card sx={styles.sponsorContainer} key={sponsor.name}>
                <CardBody>
                  <Image alt={sponsor.name} src={sponsor.logo} />
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
