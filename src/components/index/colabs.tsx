import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

export default function Colabs() {
  return (
    <Box textAlign="center" maxW="6xl" mx="auto" color="white">
      <Heading>Collaboration Projects</Heading>
      <Text>
        Clearbot is pleased to partner with Plastic Free Seas, a local charity
        focusing on plastic marine pollution education, for the citizen science
        project to collect and label photos of rubbish on the beach. These
        photos will teach our AI robots how to identify rubbish. We need
        volunteers to help with this, and you can find information about what to
        do on their website.
      </Text>
    </Box>
  )
}
