"use client";
import { FC } from "react";
import { border, Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import Logo from "@/lib/assets/Logo";
import CurlyBracketOpen from "@/lib/assets/bold/CurlyBracketOpen";
import CurlyBracketClose from "@/lib/assets/bold/CurlyBracketClose";
import Globe from "@/lib/assets/line/Globe";
import Heart from "../assets/line/Heart";
import Hash from "../assets/line/Hash";
import Comment from "../assets/bold/Comment";

const ComingSoon: FC = () => {
  return (
    <Box display="flex">
      <Container maxW="1600px" centerContent>
        <Flex direction="column" align="center">
          <Icon as={Logo} sx={styles.logo} mb={4} />
          <Text
            textAlign="center"
            fontSize={{ base: "2xl", lg: "4xl" }}
            fontWeight="700"
            mb={2}>
            Google Developer Groups
          </Text>
          <Flex align="center" gap={4}>
            <Icon as={CurlyBracketOpen} sx={styles.curlyBracket} />
            <Text sx={styles.devfestText}>DevFest Ireland</Text>
            <Icon as={CurlyBracketClose} sx={styles.curlyBracket} />
          </Flex>
          <Flex align="center" gap={2} my={8}>
            <Text sx={styles.dateText}>6th December 2025</Text>
            <Icon as={Comment} sx={styles.comment} />
            <Text sx={styles.locationText}>
              Midlands Park Hotel, Portlaoise
            </Text>
          </Flex>
          <ChakraLink
            href="https://gdg.community.dev/gdg-portlaoise?utm_source=devfestireland&utm_medium=website&utm_campaign=comingsoon"
            isExternal
            _hover={{ textDecoration: "none" }}
            mt={4}>
            <Button size="lg" sx={styles.button}>
              Register Interest & Join the Community
            </Button>
          </ChakraLink>
          <Flex gap={2} justify="center" my={8}>
            <Icon as={Globe} sx={styles.lineIcon} />
            <Icon as={Hash} sx={styles.lineIcon} />
            <Icon as={Heart} sx={styles.lineIcon} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const styles = {
  curlyBracket: {
    w: { base: "30px", lg: "50px" },
    h: { base: "80px", lg: "150px" },
  },
  comment: {
    w: { base: "40px", lg: "80px" },
    h: { base: "40px", lg: "80px" },
  },
  logo: {
    w: { base: "100px", lg: "180px" },
    h: { base: "80px", lg: "150px" },
  },
  lineIcon: {
    w: { base: "40px", lg: "60px" },
    h: { base: "40px", lg: "60px" },
    px: { base: "6px", lg: "12px" },
  },
  devfestText: {
    textAlign: "center",
    fontSize: { base: "4xl", lg: "6xl" },
    fontWeight: "700",
  },
  comingSoonText: {
    textAlign: "center",
    fontSize: { base: "2xl", lg: "4xl" },
    fontWeight: "700",
    _dark: {
      color: "white"
    },
    mb: 2,
  },
  dateText: {
    textAlign: "center",
    fontSize: { base: "2xl", lg: "4xl" },
    fontWeight: "700",
    px: { base: "16px", lg: "32px" },
    _dark: {
      color: "white",
    },
  },
  locationText: {
    textAlign: "center",
    fontSize: { base: "2xl", lg: "4xl" },
    fontWeight: "700",
    px: { base: "16px", lg: "32px" },
    _dark: {
      color: "white",
    },
  },
  button: {
    borderRadius: "9999px",
    border: "2px solid",
    fontSize: { base: "lg", lg: "2xl" },
    fontWeight: "bold",
    px: { base: "24px", lg: "48px" },
    py: { base: "12px", lg: "24px" },
    bg: "blue.pastel",
    _hover: {
      bg: "blue.core",
      color: "white",
      borderColor: "white",
      transform: "scale(1.05)",
    },
    _active: {
      bg: "blue.700",
      transform: "scale(0.95)",
    },
  },
};

export { ComingSoon };
