"use client";
import { FC } from "react";

import { Box, Container, Flex, Icon, Text, Wrap } from "@chakra-ui/react";
import CurlyBracketOpen from "@/lib/assets/bold/CurlyBracketOpen";
import CurlyBracketClose from "@/lib/assets/bold/CurlyBracketClose";
import Logo from "@/lib/assets/Logo";
import Globe from "@/lib/assets/line/Globe";
import Heart from "../assets/line/Heart";
import Hash from "../assets/line/Hash";
import Comment from "../assets/bold/Comment";

interface HeaderProps {
  data?: any;
}

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <Box my="5vh">
      <Container maxW="1600px">
        <Wrap
          spacing={{ base: "10px", sm: "20px", lg: "30px", "2xl": "40px" }}
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
            <Box textAlign="center">
              <Icon as={Globe} sx={styles.lineIcon} />
              <Icon as={Hash} sx={styles.lineIcon} />
              <Icon as={Heart} sx={styles.lineIcon} />
            </Box>
            <Text sx={styles.dateText}>16th Nov 2024</Text>
          </Box>
          <Flex sx={styles.flex}>
            <Icon as={Comment} sx={styles.comment} />
            <Box>
              <Text sx={styles.universityText}>Ulster University</Text>
              <Text sx={styles.devfestText}>Belfast</Text>
            </Box>
          </Flex>
        </Wrap>
      </Container>
    </Box>
  );
};

const styles = {
  curlyBracket: {
    w: { base: "40px", lg: "75px", "2xl": "100px" },
    h: { base: "110px", lg: "250px", "2xl": "350px" },
  },
  comment: {
    w: { base: "70px", lg: "150px", "2xl": "200px" },
    h: { base: "100px", lg: "250px", "2xl": "300px" },
  },
  logo: {
    w: { base: "120px", lg: "200px", "2xl": "250px" },
    h: { base: "100px", lg: "170px", "2xl": "200px" },
  },
  lineIcon: {
    w: { base: "70px", lg: "130px" },
    h: { base: "70px", lg: "130px" },
    px: { base: "10px", lg: "20px" },
  },
  devfestText: {
    textAlign: "center",
    fontSize: { base: "4xl", lg: "6xl", "2xl": "7xl" },
    fontWeight: "700",
  },
  locationText: {
    textAlign: "center",
    background: "white",
    fontSize: { base: "3xl", sm: "4xl", lg: "5xl", "2xl": "6xl" },
    fontWeight: "700",
    lineHeight: "1.4",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "grayscale.black",
      color: "white",
      border: "4px solid white",
    },
  },
  dateText: {
    textAlign: "center",
    background: "red.pastel",
    fontSize: { base: "3xl", sm: "4xl", lg: "5xl", "2xl": "6xl" },
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
  universityText: {
    textAlign: "center",
    background: "yellow.pastel",
    fontSize: { base: "3xl", sm: "4xl", lg: "5xl", "2xl": "6xl" },
    fontWeight: "700",
    lineHeight: { base: "1.2", lg: "1.4" },
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "yellow.core",
      color: "white",
      border: "4px solid white",
    },
  },
  gdgText: {
    fontSize: { base: "2xl", lg: "5xl", "2xl": "6xl" },
    fontWeight: "700",
    lineHeight: "1",
  },
  flex: {
    gap: { base: "20px", lg: "30px" },
    alignItems: "center",
  },
};

export { Header };
