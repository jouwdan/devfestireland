import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { Box, ColorModeScript, SystemStyleObject } from "@chakra-ui/react";
import theme from "@/lib/theme";
import { Navigation } from "@/lib/components/Navigation";
import { Footer } from "@/lib/components/Footer";

const googleSans = localFont({
  src: [
    {
      path: "../lib/fonts/GoogleSansDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/fonts/GoogleSansDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "DevFest Ireland 2024",
  description:
    "Ireland’s largest community-driven tech event, cohosted by all GDGs across the country. Dive into a day full of inspiring talks, hands-on workshops, and networking with fellow tech enthusiasts.",
  keywords:
    "DevFest, DevFest Ireland, GDG, Google Developer Groups, Tech Conference, Dublin, Belfast, Galway, Athlone, Portlaoise, Developers, Workshops, Networking, Tech Community",
  authors: [{ name: "DevFest Ireland" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Box sx={styles.layout} minH="100vh" w="full">
            <Navigation />
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

const styles: Record<string, SystemStyleObject> = {
  layout: {
    bg: "grayscale.white",
    _dark: {
      bg: "grayscale.black",
    },
  },
};
