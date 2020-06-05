import React from "react"
import { Box, Heading } from "@chakra-ui/core"

export const SectionLayout = ({ title, id, children }) => {
  return (
    <Box id={id}>
      <Heading
        textAlign="center"
        fontSize={["5xl", "5xl", "3xl", "5xl"]}
        p={[4, 4, 4, 8, 16]}
        color="brandBlue"
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
}
