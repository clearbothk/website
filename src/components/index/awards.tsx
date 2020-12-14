import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Flex, Box, Grid, Heading } from "@chakra-ui/react"
import Img from "gatsby-image"

export const Awards = ({ awards }) => {
  return (
    <SectionLayout title="Awards" id="awards">
      <Grid
        id="awards"
        maxW="2xl"
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
        gridGap={10}
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
