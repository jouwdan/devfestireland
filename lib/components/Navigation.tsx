"use client";
import { FC } from "react";

import { Box, Button, Container, Text, useColorMode } from "@chakra-ui/react";

import { Image } from "@chakra-ui/next-js";

interface NavigationProps {
  data?: any;
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="85%">
      <Box sx={styles.navigation}>
        <Box display="flex" gap="2" alignItems="center">
          <Image
            src="/devfest-logo.svg"
            alt="DevFest Ireland"
            width={35}
            height={35}
          />
          <Text fontSize="2xl" fontWeight="700">
            DevFest
          </Text>
          <Text sx={styles.locationText}>Ireland</Text>
        </Box>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
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
