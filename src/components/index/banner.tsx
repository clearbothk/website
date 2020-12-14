import React from "react"
import { Text, Box, Heading, Grid } from "@chakra-ui/react"
import Img from "gatsby-image"

interface BannerProps {
  image: any
}

export const Banner: React.FC<BannerProps> = ({ image }) => {
  return (
    <Box position="relative" id="aboutus">
      <Box
        position="absolute"
        h="100%"
        w="100%"
        backgroundColor="rgba(0,0,0,0.6)"
        zIndex={10}
      ></Box>
      <Img fluid={image} />
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
            WE BUILD ROBOTS TO EMPOWER COMMUNITIES TO GET PLASTIC OUT OF THE
            OCEAN
          </Heading>
          <Text
            color="white"
            fontSize={["xs", "sm", "md"]}
            lineHeight={["base", "tall", "taller"]}
          >
            Clearbot is a swarm of trash collecting robots that use AI-Vision to
            detect and collect trash from water bodies. These robots are fully
            autonomous, solar-powered and work as a team to remove trash. In
            comparison to any current solution, Clearbot is 15x cheaper, has 5x
            more reach and removes 2x more trash daily (24x7x365).
          </Text>
        </Box>
      </Grid>
    </Box>
  )
}
