import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const googleColors = {
  blue: {
    core: "#4285f4",
    halftone: "#57caff",
    pastel: "#c3ecf6",
  },
  green: {
    core: "#34a853",
    halftone: "#5cdb6d",
    pastel: "#ccf6c5",
  },
  yellow: {
    core: "#f9ab00",
    halftone: "#ffd427",
    pastel: "#ffe7a5",
  },
  red: {
    core: "#ea4335",
    halftone: "#ff7daf",
    pastel: "#f8d8d8",
  },
  grayscale: {
    white: "#f0f0f0",
    whiteclear: "rgba(240, 240, 240, 0.8)",
    black: "#1e1e1e",
    blackclear: "rgba(30, 30, 30, 0.8)",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors: googleColors });

export default theme;
