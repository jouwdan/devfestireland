"use client";

import {
    Container,
    Text,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import Script from "next/script";


export default dynamic(() => Promise.resolve(Agenda), { ssr: false });

function Agenda() {
    return (
        <Container maxW="1920px" px="20px" py="5vh">
            <Text sx={styles.heading}>Agenda</Text>

            <Script
                type="text/javascript"
                src="https://sessionize.com/api/v2/kbguy4wm/view/GridSmart"
                strategy="afterInteractive"
                onLoad={() => console.log("loaded from sessionize")}
                onError={() => console.error("could not load from sessionize")}
            />
        </Container>
    );
}

const styles = {
    heading: {
        w: "fit-content",
        textAlign: "center",
        background: "blue.pastel",
        fontSize: {base: "2xl", sm: "3xl", lg: "4xl", "2xl": "5xl"},
        fontWeight: "700",
        px: {base: "20px", lg: "40px"},
        border: "4px solid black",
        borderRadius: "9999px",
        _dark: {
            background: "blue.core",
            color: "white",
            border: "4px solid white",
        },
    },
};
