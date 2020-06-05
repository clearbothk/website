import React from "react"
import { SectionLayout } from "./sectionlayout"
import {
  Text,
  Flex,
  Box,
  Grid,
  Heading,
  Icon,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/core"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const Contact = () => {
  return (
    <Box id="contactus">
      <Grid
        p={20}
        templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
        gap={20}
        maxW="7xl"
        margin="auto"
      >
        <Box>
          <Heading fontSize={["3xl", "3xl", "3xl", "3xl"]} pb="10">
            CONTACT US
          </Heading>
          <Box as="form">
            <FormControl mb="4">
              <Input
                type="name"
                id="name"
                aria-describedby="email-helper-text"
                placeholder="Name"
              />
            </FormControl>
            <FormControl mb="4">
              <Input
                type="email"
                id="email"
                aria-describedby="email-helper-text"
                placeholder="Email address"
              />
            </FormControl>
            <FormControl mb="4">
              <Textarea id="comments" placeholder="Comments" />
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Heading fontSize={["3xl", "3xl", "3xl", "3xl"]} pb="10">
            FOLLOW US
          </Heading>
          <Flex alignItems="center">
            <Link href="https://facebook.com/clearbot" fontSize="4xl" mr="6">
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/clearbothk/"
              fontSize="4xl"
              mr="6"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/clearbothk"
              fontSize="4xl"
            >
              <FaLinkedinIn />
            </Link>
          </Flex>

          <Heading fontSize={["3xl", "3xl", "3xl", "3xl"]} pt="10" pb="6">
            OR EMAIL US
          </Heading>
          <Link href="mailto:contact@clearbot.dev" fontSize="xl" mr="6">
            <Text>contact@clearbot.dev</Text>
          </Link>
        </Box>
      </Grid>
    </Box>
  )
}
