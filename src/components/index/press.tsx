import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Box, Grid, Heading, Flex, Link } from "@chakra-ui/core"
import Img from "gatsby-image"

export const Press = ({ scmp }) => {
  return (
    <SectionLayout title="Press" id="press">
      <Flex justifyContent="center">
        <Link
          href={
            "https://www.scmp.com/lifestyle/article/3039950/robot-marine-plastic-pollution-collector-hong-kong-students-invented"
          }
        >
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "3fr 2fr", "3fr 2fr"]}
            maxW="5xl"
            margin={4}
            p={4}
            borderWidth="2px"
            borderStyle="solid"
          >
            <Box>
              <Img fluid={scmp} />
            </Box>
            <Box p={[4]}>
              <Heading color="brandBlue" fontSize={["2xl"]} lineHeight="tall">
                High hopes for Hong Kong-designed robot marine trash hunter
              </Heading>
              <Text lineHeight="tall">
                ClearBot solar-powered, semi-submersible, US$900 rubbish scooper
                invention won Hong Kong student engineers and scientists a
                global prize.
              </Text>
            </Box>
          </Grid>
        </Link>
      </Flex>
    </SectionLayout>
  )
}
