import React from "react"
import { Flex, Box, Text, Link } from "@chakra-ui/core"
import Logo from "../images/LogoSide.svg"

const Header = () => {
  const [show, setShow] = React.useState(false)

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
        <Box
          display={{
            xs: show ? "block" : "none",
            sm: show ? "block" : "none",
            md: "flex",
          }}
        >
          <Link href="#aboutus">
            <Text mr={[1, 2, 4]}>About Us</Text>
          </Link>
          <Link href="#press">
            <Text mr={[1, 2, 4]}>Press</Text>
          </Link>
          <Link href="#awards">
            <Text mr={[1, 2, 4]}>Awards</Text>
          </Link>
          <Link href="#contactus">
            <Text mr={[1, 2, 4]}>Contact Us</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
