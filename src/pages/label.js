import React, { useState } from "react"
import {
  ThemeProvider,
  CSSReset,
  Box,
  Button,
  Text,
  Flex,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Annotation from "@clearbothk/react-image-annotation"
import _ from "lodash"
import * as img from "../images/banner.jpg"

const Label = () => {
  const [annotations, setAnnotations] = useState([])
  const [annotation, setCurrentAnnotation] = useState({})
  const [imageURL, setImageURL] = useState("")
  const [loadingImage, setLoadingImage] = useState(false)

  const onSubmit = annotation => {
    const { geometry, data } = annotation
    const geometryRounded = _.mapValues(geometry, val =>
      isNaN(val) ? val : _.round(val, 3)
    )
    console.log(geometryRounded)
    setCurrentAnnotation({})
    setAnnotations([
      ...annotations,
      {
        geometry: geometryRounded,
        data: { ...data, id: annotations.length + 1 },
      },
    ])
  }

  async function getImageFromAzure() {
    setLoadingImage(true)
    const uri =
      process.env.NODE_ENV === "development"
        ? "/api/GetUnlabelledImage"
        : "https://clearbotdatabuilder0.azurewebsites.net/api/GetUnlabelledImage?code=aeFa9N8NmLDyYsM5QufCTaUaIeTTE5X7DIUCz5d4Fu5qnvgAccCggQ=="
    const response = await fetch(uri)
    const { filename, image } = await response.json()
    setLoadingImage(false)
    setImageURL(image)
  }

  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <SEO title="Labelling Tool" />
        <Box maxW="5xl">
          {imageURL ? (
            <Annotation
              src={imageURL}
              annotations={annotations}
              value={annotation}
              onChange={setCurrentAnnotation}
              onSubmit={onSubmit}
            />
          ) : (
            <Flex minH="md" alignItems="center" justifyContent="center">
              <Button onClick={getImageFromAzure} isLoading={loadingImage}>
                <Text>Get images to start annotation</Text>
              </Button>
            </Flex>
          )}
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Label
