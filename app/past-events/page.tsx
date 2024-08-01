"use client";

import { Link } from "@chakra-ui/next-js";
import { Container, SimpleGrid, Text, Image, Box } from "@chakra-ui/react";

const images23 = Array.from(
  { length: 8 },
  (_, i) => `/images/devfest23/${i + 1}.jpg`
);

const images22 = Array.from(
  { length: 8 },
  (_, i) => `/images/devfest22/${i + 1}.jpg`
);

const events = [
  {
    title: "DevFest Ireland 2023 - Dublin",
    date: "2nd December 2023",
    location: "Griffith College, Dublin",
    description:
      "DevFest Ireland 2023 was a great success with a packed agenda of talks, codelabs, and workshops across 2 stages, with subjects such as AI & Machine Learning, Web, Mobile, Cloud & DEI.",
    agenda: [
      "/images/devfest23/agenda/1.webp",
      "/images/devfest23/agenda/2.webp",
    ],
    sponsors: [
      {
        name: "Griffith College",
        logo: "/images/devfest23/sponsors/griffith-college.webp",
        url: "https://www.griffith.ie/",
      },
      {
        name: "Charles River Labs",
        logo: "/images/devfest23/sponsors/charles-river.webp",
        url: "https://www.criver.com/",
      },
      {
        name: "Codu",
        logo: "/images/devfest23/sponsors/codu.webp",
        url: "https://codu.co/",
      },
    ],
    images: images23,
  },
  {
    title: "DevFest Ireland 2022 - Galway",
    date: "26th November 2022",
    location: "Genesys, Galway",
    description:
      "DevFest Ireland 2022 was the first All Ireland DevFest, it was well received and formed a great foundation for future events.",
    agenda: ["/images/devfest22/agenda/running-order.jpg"],
    sponsors: [
      {
        name: "Genesys",
        logo: "/images/devfest22/sponsors/genesys.png",
        url: "https://www.genesys.com/",
      },
      {
        name: "Google",
        logo: "/images/devfest22/sponsors/google.png",
        url: "https://www.google.com/",
      },
      {
        name: "MongoDB",
        logo: "/images/devfest22/sponsors/mongodb.jpeg",
        url: "https://www.mongodb.com/",
      },
      {
        name: "iTag Skillnet",
        logo: "/images/devfest22/sponsors/itag-skillnet.png",
        url: "https://itag.ie/talent/itag-skillnet-network/",
      },
      {
        name: "JetBrains",
        logo: "/images/devfest22/sponsors/jetbrains.png",
        url: "https://www.jetbrains.com/",
      },
    ],
    images: images22,
  },
];

export default function PastEvents() {
  return (
    <Container maxW="1920px" px="20px" py="5vh">
      {events.map((event, index) => (
        <Box key={index} pb="3vh">
          <Text sx={styles.heading}>{event.title}</Text>
          <Text fontSize="2xl" my="10px" fontWeight="700">
            {event.date}, {event.location}
          </Text>
          <Text fontSize="2xl" my="20px">
            {event.description}
          </Text>

          <Text sx={styles.subheading}>Agenda</Text>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mb="20px">
            {event.agenda.map((agenda, index) => (
              <Image
                key={index}
                src={agenda}
                alt={`${event.title} Agenda ${index + 1}`}
              />
            ))}
          </SimpleGrid>

          <Text sx={styles.subheading}>Sponsors</Text>
          <SimpleGrid
            columns={{ base: 3, lg: 5 }}
            spacing={10}
            alignItems="center"
            mb="20px">
            {event.sponsors.map((sponsor, index) => (
              <Link key={index} href={sponsor.url} isExternal>
                <Image src={sponsor.logo} alt={`${sponsor.name}`} />
              </Link>
            ))}
          </SimpleGrid>

          <Text sx={styles.subheading}>Photos</Text>
          <SimpleGrid
            columns={{ base: 2, lg: 4 }}
            spacing={10}
            gridTemplateRows="masonry"
            mb="20px">
            {event.images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${event.title} Image ${index + 1}`}
              />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Container>
  );
}

const styles = {
  heading: {
    mb: "20px",
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
  subheading: {
    mb: "20px",
    w: "fit-content",
    textAlign: "center",
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
