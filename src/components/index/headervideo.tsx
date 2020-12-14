import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import thumbnail from "../../images/headerthumbnail.png"

export const HeaderVideo = ({ vidSrc }) => {
  return (
    <Box position="relative" width="100%">
      <Flex
        opacity="0.4"
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        left="0"
        backgroundColor="#000"
      ></Flex>
      <Flex
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        left="0"
        p={10}
      >
        <Grid
          templateColumns={["1fr", "4fr 1fr", "6fr 1fr", "3fr 2fr", "1fr 1fr"]}
          gap={[2, 8, 12, 16]}
          p={[8, 8, 16]}
          position="absolute"
          top={0}
          zIndex={100}
        >
          <Box>
            <Heading color="brandYellow" fontSize={["xl", "xl", "3xl", "5xl"]}>
              WE BUILD ROBOTS TO GET PLASTIC OUT OF THE OCEAN
            </Heading>
            <Text
              color="white"
              fontSize={["xs", "sm", "md"]}
              lineHeight={["base", "tall", "taller"]}
            >
              Clearbot is a swarm of trash collecting robots that use AI-Vision
              to detect and collect trash from water bodies. These robots are
              fully autonomous, solar-powered and work as a team to remove
              trash. In comparison to any current solution, Clearbot is 15x
              cheaper, has 5x more reach and removes 2x more trash daily
              (24x7x365).
            </Text>
          </Box>
        </Grid>
      </Flex>
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={vidSrc} type="video/mp4" />
      </video>
    </Box>
  )
}
