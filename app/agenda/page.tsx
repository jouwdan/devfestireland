// @ts-ignore

"use client";

import {
    Container,
    Text,
    Box, Grid, GridItem, Heading, VStack
} from "@chakra-ui/react";
import Script from "next/script";


function Agenda() {

    return (
        <Container maxW="1920px" px="20px" py="5vh">
            <Text sx={styles.heading}>Agenda</Text>

            <div className="sessionize-loader"
                 data-sessionize-load-url="https://sessionize.com/api/v2/kbguy4wm/view/GridSmart?under=True">
                <div className="sz-spinner"></div>
            </div>

            <Script
                strategy="afterInteractive"
                src="https://sessionize.com/api/v2/kbguy4wm/view/GridSmart"
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
}

export default Agenda;
