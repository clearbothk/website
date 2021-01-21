import React from "react"
import { SectionLayout } from "./sectionlayout"
import { Text, Box, Grid, Heading, Flex, Link, Image } from "@chakra-ui/react"
import Img from "gatsby-image"

export const Press = ({ scmp }) => {
  return (
    <SectionLayout title="Press" id="press">
      <Flex direction={["column", "column", "row", "row", "row"]}>
        <Flex justifyContent="center">
          <Link
            href={
              "https://www.scmp.com/lifestyle/article/3039950/robot-marine-plastic-pollution-collector-hong-kong-students-invented"
            }
          >
            <Grid templateColumns="1fr" maxW="5xl" margin={4} p={4}>
              <Box>
                <Img fluid={scmp} />
              </Box>
              <Box p={[4]}>
                <Heading color="brandBlue" fontSize={["2xl"]} lineHeight="tall">
                  High hopes for Hong Kong-designed robot marine trash hunter
                </Heading>
                <Text fontWeight={900} mb={3}>
                  South China Morning Post
                </Text>
                <Text lineHeight="tall">
                  ClearBot solar-powered, semi-submersible, US$900 rubbish
                  scooper invention won Hong Kong student engineers and
                  scientists a global prize.
                </Text>
              </Box>
            </Grid>
          </Link>
        </Flex>

        <Flex justifyContent="center">
          <Link
            href={
              "https://www.wsj.com/articles/best-of-ces-2021-the-virtual-tech-shows-weirdest-and-most-wondrous-gadgets-11610719200"
            }
          >
            <Grid templateColumns="1fr" maxW="5xl" margin={4} p={4}>
              <Box>
                <Image src="https://images.wsj.net/im-285749/IM" />
              </Box>
              <Box p={[4]}>
                <Heading color="brandBlue" fontSize={["2xl"]} lineHeight="tall">
                  Best of CES 2021: The (Virtual) Tech Show’s Weirdest and Most
                  Wondrous Gadgets
                </Heading>
                <Text fontWeight={900}>Wall Street Journal</Text>
              </Box>
            </Grid>
          </Link>
        </Flex>
      </Flex>
    </SectionLayout>
  )
}
