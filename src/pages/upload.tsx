import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { UploadArea } from "../components/upload/uploadarea"
import UploadList from "../components/upload/uploadlist"
import FileUploadProvider from "../contexts/uploader"

const UploadPage = () => (
  <Layout>
    <SEO title="Upload files" />
    <FileUploadProvider>
      <UploadArea />
      <UploadList />
    </FileUploadProvider>
  </Layout>
)

export default UploadPage
