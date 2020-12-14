import React from "react"
import { Box } from "@chakra-ui/react"
import thumbnail from "../../images/headerthumbnail.png"

export const HeaderVideo = ({ vidSrc }) => {
  return (
    <Box position="relative" width="100%">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={vidSrc} type="video/mp4" />
      </video>
    </Box>
  )
}
