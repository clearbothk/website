import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Flex, Box, Grid, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"

export const Awards = ({ awards }) => {
  return (
    <SectionLayout title="Awards" id="awards">
      <Grid
        id="awards"
        maxW="5xl"
        margin="auto"
        p={4}
        templateColumns={[
          "1fr",
          "1fr",
          `repeat(${awards.length}, 1fr)`,
          `repeat(${awards.length}, 1fr)`,
          `repeat(${awards.length}, 1fr)`,
        ]}
        alignItems="center"
        justifyItems="center"
      >
        {awards.map((award, index) => (
          <Box key={index} w="3xs">
            <Img fluid={award} />
          </Box>
        ))}
      </Grid>
    </SectionLayout>
  )
}
