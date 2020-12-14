import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Text, Box } from "@chakra-ui/react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box margin="0 auto" as="main">
        {children}
      </Box>
      <footer>
        <Box p={6} style={{ textAlign: "center" }}>
          <Text>
            © {new Date().getFullYear()} Clearbot | All Rights Reserved
          </Text>
        </Box>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
