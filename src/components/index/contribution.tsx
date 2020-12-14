import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Flex, Box, Grid, Heading, Icon, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

export const Contribution = ({ prediction }) => {
  return (
    <Box backgroundColor="brandBlue" mt="8" id="contactus">
      <Grid
        p={20}
        templateColumns={["1fr", "1fr", "2fr 3fr", "3fr 2fr", "3fr 2fr"]}
        gap={20}
        maxW="5xl"
        margin="auto"
      >
        <Box>
          <Heading color="white" fontSize={["3xl", "5xl", "5xl", "5xl"]}>
            Here is how you can contribute
          </Heading>
        </Box>
        <Box backgroundColor="white">
          <Img fluid={prediction} />
          <Link href="/label">
            <Flex
              p="4"
              borderBottom="1px solid #f0f0f0"
              justifyContent="space-between"
            >
              <Text>HELP LABEL DATA</Text>
              <Icon name="arrow-forward" size="24px" />
            </Flex>
          </Link>
          <Link href="/upload">
            <Flex p="4" justifyContent="space-between">
              <Text>CONTRIBUTE TO DATASET</Text>
              <Icon name="arrow-forward" size="24px" />
            </Flex>
          </Link>
        </Box>
      </Grid>
    </Box>
  )
}
