"use client";
import { FC } from "react";

import { Box, Container, Flex, Icon, Text, Wrap } from "@chakra-ui/react";
import CurlyBracketOpen from "@/lib/assets/bold/CurlyBracketOpen";
import CurlyBracketClose from "@/lib/assets/bold/CurlyBracketClose";
import Logo from "@/lib/assets/Logo";
import Globe from "@/lib/assets/line/Globe";

interface HeaderProps {
  data?: any;
}

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <Box my="5vh">
      <Container maxW="85%" h="60vh">
        <Wrap
          spacing={{ base: "0px", lg: "30px" }}
          justify="center"
          align="center">
          <Flex sx={styles.flex}>
            <Icon as={Logo} sx={styles.logo} />
            <Box>
              <Text sx={styles.gdgText}>Google</Text>
              <Text sx={styles.gdgText}>Developer</Text>
              <Text sx={styles.gdgText}>Groups</Text>
            </Box>
          </Flex>
          <Flex sx={styles.flex}>
            <Icon as={CurlyBracketOpen} sx={styles.curlyBracket} />
            <Box>
              <Text sx={styles.devfestText}>DevFest</Text>
              <Text sx={styles.locationText}>Ireland</Text>
            </Box>
            <Icon as={CurlyBracketClose} sx={styles.curlyBracket} />
          </Flex>
          <Box textAlign="center">
            <Icon as={Globe} sx={styles.globe} />
            <Text sx={styles.yearText}>2024</Text>
          </Box>
        </Wrap>
      </Container>
    </Box>
  );
};

const styles = {
  curlyBracket: {
    w: { base: "40px", lg: "80px", "2xl": "100px" },
    h: { base: "100px", lg: "300px", "2xl": "350px" },
  },
  logo: {
    w: { base: "120px", lg: "200px", "2xl": "250px" },
    h: { base: "100px", lg: "170px", "2xl": "200px" },
  },
  globe: {
    w: { base: "50px", lg: "150px" },
    h: { base: "50px", lg: "150px" },
  },
  devfestText: {
    textAlign: "center",
    fontSize: { base: "4xl", lg: "8xl" },
    fontWeight: "700",
  },
  locationText: {
    textAlign: "center",
    background: "white",
    fontSize: { base: "3xl", lg: "7xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    mb: { base: "12px", lg: "30px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "grayscale.black",
      color: "white",
      border: "4px solid white",
    },
  },
  yearText: {
    textAlign: "center",
    background: "red.pastel",
    fontSize: { base: "3xl", sm: "4xl", lg: "7xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "red.halftone",
      color: "white",
      border: "4px solid white",
    },
  },
  gdgText: {
    fontSize: { base: "2xl", lg: "5xl", "2xl": "7xl" },
    fontWeight: "700",
    lineHeight: "1",
  },
  flex: {
    gap: { base: "20px", lg: "30px" },
    alignItems: "center",
  },
};

export { Header };
