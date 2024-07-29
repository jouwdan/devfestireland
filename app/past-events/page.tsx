"use client";

import { Container, SimpleGrid, Text, Image } from "@chakra-ui/react";

export default function PastEvents() {
  const images23 = Array.from(
    { length: 8 },
    (_, i) => `/images/devfest23/${i + 1}.jpg`
  );

  const images22 = Array.from(
    { length: 8 },
    (_, i) => `/images/devfest22/${i + 1}.jpg`
  );

  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading}>DevFest Ireland 2023 - Dublin</Text>
      <Text fontSize="2xl" my="20px">
        DevFest Ireland 2023 taken place in Griffith College, Dublin on 2nd
        December 2023. It was a great success with a packed agenda of talks,
        codelabs, and workshops across 2 stages, with subjects such as AI &
        Machine Learning, Web, Mobile, Cloud & DEI.
      </Text>
      <SimpleGrid
        columns={{ base: 2, lg: 4 }}
        spacing={10}
        gridTemplateRows="masonry"
        mb="20px">
        {images23.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`DevFest Ireland 2023 Image ${index + 1}`}
          />
        ))}
      </SimpleGrid>
      <Text sx={styles.heading}>DevFest Ireland 2022 - Galway</Text>
      <Text fontSize="2xl" my="20px">
        DevFest Ireland 2022 taken place in Genesys, Galway on 26th November
        2022. As the first All Ireland DevFest, it was well received and formed
        a great foundation for future events.
      </Text>
      <SimpleGrid
        columns={{ base: 2, lg: 4 }}
        spacing={10}
        gridTemplateRows="masonry"
        mb="20px">
        {images22.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`DevFest Ireland 2023 Image ${index + 1}`}
          />
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
};
