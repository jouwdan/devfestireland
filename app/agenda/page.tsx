// @ts-ignore

"use client";

import {
  Container,
  Text,
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Show,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Schedule } from "@/types/schedule";

function Agenda() {
  const [schedule, setSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    fetch("https://sessionize.com/api/v2/kbguy4wm/view/GridSmart")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error(err));
  }, []);

  const DescriptionWithButton = ({ description }: { description: string }) => {
    const [showMore, setShowMore] = useState(false);
    const showDescription = () => {
      setShowMore(!showMore);
    };

    return (
      <Show above="lg">
        <Text noOfLines={showMore ? undefined : 3}>{description}</Text>
        <Button
          w="full"
          variant="unstyled"
          sx={styles.button}
          size="md"
          mb="8px"
          onClick={showDescription}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Show>
    );
  };

  return (
    <Container maxW="1920px" px="20px" py="5vh">
      <Text sx={styles.heading}>Agenda</Text>
      {schedule ? (
        schedule?.map((day, index) => (
          <Box key={index} my="24px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {day.rooms.map((room, index) => (
                <GridItem
                  key={index}
                  sx={styles.roomBox}
                  colSpan={{ base: 2, lg: 1 }}
                >
                  <Heading size="md" sx={styles.roomHeading}>
                    {room.name}
                  </Heading>
                  {room.sessions.map((session, index) => (
                    <Box key={index} sx={styles.sessionBox}>
                      <Text sx={styles.sessionTitle}>{session.title}</Text>
                      {session.description && (
                        <DescriptionWithButton
                          description={session.description}
                        />
                      )}
                      <Text sx={styles.speakerName}>
                        {session.speakers
                          .map((speaker) => speaker.name)
                          .join(", ")}
                      </Text>
                      <Text sx={styles.sessionTime}>
                        {new Date(session.startsAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {new Date(session.endsAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    </Box>
                  ))}
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))
      ) : (
        <Text mt={8} fontSize="3xl">
          Loading...
        </Text>
      )}
    </Container>
  );
}

const styles = {
  heading: {
    w: "fit-content",
    textAlign: "center",
    background: "blue.pastel",
    fontSize: { base: "2xl", sm: "3xl", lg: "4xl", "2xl": "5xl" },
    fontWeight: "700",
    px: { base: "20px", lg: "40px" },
    border: "4px solid black",
    borderRadius: "9999px",
    _dark: {
      background: "blue.core",
      color: "white",
      border: "4px solid white",
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
  dayHeading: {
    mb: 4,
    color: "blue.600",
    _dark: {
      color: "blue.300",
    },
  },
  roomBox: {
    p: 8,
    shadow: "sm",
    border: "4px solid black",
    borderRadius: "24px",
    bg: "grayscale.whiteclear",
    _dark: {
      bg: "grayscale.blackclear",
      border: "4px solid white",
    },
  },
  roomHeading: {
    mb: 4,
    color: "green.core",
    fontSize: "3xl",
    _dark: {
      color: "green.pastel",
    },
  },
  sessionBox: {
    p: 4,
    border: "2px solid black",
    borderRadius: "24px",
    mb: 3,
    _hover: {
      bg: "green.pastel",
      _dark: {
        bg: "green.core",
      },
    },
  },
  sessionTitle: {
    fontWeight: "bold",
    fontSize: "xl",
  },
  speakerName: {
    color: "blue.core",
    _dark: {
      color: "blue.pastel",
    },
  },
  sessionTime: {
    fontWeight: "bold",
    color: "grayscale.black",
    _dark: {
      color: "grayscale.white",
    },
  },
};

export default Agenda;
