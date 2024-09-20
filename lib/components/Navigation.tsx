"use client";
import { FC, useRef } from "react";

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Show,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import Logo from "../assets/Logo";
import { navLinks } from "@/lib/data";

import { usePathname } from "next/navigation";

interface NavigationProps {
  data?: any;
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  return (
    <>
      <Box sx={styles.actionBar}>
        <Text textAlign="center" py="2">
          Our Call for Speakers is now closed. Agenda will be announced as soon
          as possible.
        </Text>
      </Box>
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
                {navLinks.map((link) => (
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
              <Show below="lg">
                <Button
                  ref={btnRef}
                  onClick={onOpen}
                  variant="unstyled"
                  sx={styles.button}
                  size="md"
                  ml="4">
                  <HamburgerIcon />
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}>
                  <DrawerOverlay sx={styles.drawerOverlay} />
                  <DrawerContent zIndex="52" sx={styles.drawerContent}>
                    <DrawerCloseButton mt="10px" mr="10px" />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                      {navLinks.map((link) => (
                        <Link
                          href={link.url}
                          key={link.name}
                          target={link.newTab ? "_blank" : ""}>
                          <Button
                            w="full"
                            variant="unstyled"
                            sx={
                              link.featured
                                ? styles.featuredButton
                                : styles.button
                            }
                            onClick={onClose}
                            size="md"
                            mb="8px"
                            isActive={pathname.startsWith(link.url)}>
                            {link.name}
                          </Button>
                        </Link>
                      ))}
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Show>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

const styles = {
  actionBar: {
    bg: "yellow.pastel",
    _dark: {
      bg: "yellow.core",
    },
  },
  navigationContainer: {
    position: "sticky",
    top: "0",
    bg: "grayscale.whiteclear",
    backdropFilter: "auto",
    backdropBlur: "8px",
    zIndex: "50",
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
  drawerOverlay: {
    backdropFilter: "auto",
    backdropBlur: "8px",
    bg: "grayscale.whiteclear",
    _dark: {
      bg: "grayscale.blackclear",
    },
  },
  drawerContent: {
    display: "flex",
    p: "10px",
    flexDirection: "column",
    bg: "grayscale.white",
    _dark: {
      bg: "grayscale.black",
    },
  },
};

export { Navigation };
