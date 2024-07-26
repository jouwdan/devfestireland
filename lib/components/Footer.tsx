"use client";
import { FC } from "react";

import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface FooterProps {
  data?: any;
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <Container maxW="1920px" px="20px">
      <Box p="20px" textAlign="right">
        Built with ❤️ & ☕ by{" "}
        <Link
          href="https://jouwdan.com"
          target="_blank"
          textDecoration="underline">
          Jordan Harrison
        </Link>
      </Box>
    </Container>
  );
};

const styles = {};

export { Footer };
