import React from "react"
import { Flex, Box, Text, Link } from "@chakra-ui/react"
import Logo from "../images/LogoSide.svg"

const Header = () => {
  return (
    <Box as="header">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        alignItems="center"
        p={[1, 2, 3]}
      >
        <Box flex="1 1 auto">
          <Link href="/">
            <Box as={Logo} maxW="3xs"></Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
