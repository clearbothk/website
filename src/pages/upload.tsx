import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { UploadArea } from "../components/upload/uploadarea"

const UploadPage = () => (
  <Layout>
    <SEO title="Upload files" />
    <UploadArea />
  </Layout>
)

export default UploadPage
