"use client";
import { FC } from "react";

import {
  Box,
  Button,
  Container,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logo from "../assets/Logo";

interface NavigationProps {
  data?: any;
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="85%">
      <Box sx={styles.navigation}>
        <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            <Icon as={Logo} w="35px" h="35px" />
            <Text
              fontSize="2xl"
              fontWeight="700"
              display={{ base: "none", lg: "block" }}>
              DevFest
            </Text>
            <Text sx={styles.locationText}>Ireland</Text>
          </Box>
        </Link>
        <Button onClick={toggleColorMode}>
          <MoonIcon />
        </Button>
      </Box>
    </Container>
  );
};

const styles = {
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
  },
  locationText: {
    display: { base: "none", lg: "block" },
    background: "white",
    fontSize: "2xl",
    fontWeight: "700",
    px: "20px",
    border: "1px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "grayscale.black",
      color: "white",
      border: "1px solid white",
    },
  },
};

export { Navigation };
