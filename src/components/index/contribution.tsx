import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Flex, Box, Grid, Heading, Icon, Link } from "@chakra-ui/react"
import Img from "gatsby-image"
import Colabs from "./colabs"

export const Contribution = ({ prediction, helpus }) => {
  return (
    <Box backgroundColor="brandBlue" mt="8" id="contactus" pos="relative">
      <Img fluid={helpus} />
      <Flex
        p={[2, 4, 8, 12, 16, 20]}
        pos="absolute"
        top="0"
        left="0"
        flexDir="column"
        width="100%"
        height="100%"
        backgroundColor="rgba(0,0,0,0.4)"
      >
        <Colabs />
        <Box>
          <Heading
            color="white"
            fontSize={["xl", "2xl", "3xl", "5xl", "5xl"]}
            py={4}
          >
            Here is how you can contribute
          </Heading>
        </Box>
        <Box color="white">
          <Link href="/label">
            <Flex py={4} justifyContent="space-between">
              <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
                HELP LABEL DATA
              </Text>
            </Flex>
          </Link>
          <Link href="/upload">
            <Flex py={4} justifyContent="space-between">
              <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
                CONTRIBUTE TO DATASET
              </Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}
