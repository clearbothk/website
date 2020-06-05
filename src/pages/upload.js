import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { UploadArea } from "../components/uploadarea"

const UploadPage = () => (
  <ThemeProvider>
    <CSSReset />
    <Layout>
      <SEO title="Upload files" />
      <UploadArea />
    </Layout>
  </ThemeProvider>
)

export default UploadPage
