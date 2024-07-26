"use client";
import { FC } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Show,
  Text,
  textDecoration,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logo from "../assets/Logo";

import { usePathname } from "next/navigation";

interface NavigationProps {
  data?: any;
}

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Organizers",
    url: "/organizers",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Get Your Ticket",
    url: "https://gdg.community.dev/events/details/google-gdg-belfast-presents-devfest-ireland-2024",
    newTab: true,
    featured: true,
  },
];

const Navigation: FC<NavigationProps> = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  return (
    <Box sx={styles.navigationContainer}>
      <Container maxW="1920px">
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
          <Flex>
            <Show above="lg">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.name}
                  target={link.newTab ? "_blank" : ""}>
                  <Button
                    variant="unstyled"
                    sx={link.featured ? styles.featuredButton : styles.button}
                    size="md"
                    ml="4"
                    isActive={link.url === pathname}>
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Show>
            <Button
              variant="unstyled"
              sx={styles.button}
              onClick={toggleColorMode}
              size="md"
              ml="4">
              <MoonIcon />
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  navigationContainer: {
    position: "sticky",
    top: "0",
    bg: "grayscale.whiteclear",
    backdropFilter: "auto",
    backdropBlur: "8px",
    zIndex: "9999",
    _dark: {
      bg: "grayscale.blackclear",
    },
  },
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
  button: {
    borderRadius: "9999px",
    px: "12px",
    py: "4px",
    bg: "transparent",
    transition: "background-color 0.2s",
    _hover: {
      bg: "blue.pastel",
    },
    _active: {
      bg: "blue.pastel",
    },
    _dark: {
      _hover: {
        bg: "blue.core",
        color: "white",
      },
      _active: {
        bg: "blue.core",
      },
    },
  },
  featuredButton: {
    borderRadius: "9999px",
    px: "12px",
    py: "4px",
    border: "2px solid black",
    transition: "background-color 0.2s",
    _dark: {
      border: "2px solid white",
      _hover: {
        bg: "green.core",
        color: "white",
      },
    },
    _hover: {
      bg: "green.pastel",
    },
  },
};

export { Navigation };
