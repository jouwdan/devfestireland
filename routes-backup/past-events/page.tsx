"use client";

import { Link } from "@chakra-ui/next-js";
import { Container, SimpleGrid, Text, Image, Box } from "@chakra-ui/react";

import { pastEvents as events } from "@/lib/data";

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
