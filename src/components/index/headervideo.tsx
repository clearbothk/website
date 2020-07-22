import React from "react"
import { Box } from "@chakra-ui/core"

export const HeaderVideo = ({ Vidsrc }) => {
  return (
    <Box position="relative" paddingBottom="56.25%" height="0" width="100%">
      <Box position="absolute" top="0" left="0" bottom="0" right="0">
        <iframe
          src={Vidsrc}
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay;"
          allowFullScreen
        />
      </Box>
    </Box>
  )
}
