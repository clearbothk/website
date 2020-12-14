import React, { useState } from "react"
import {
  Box,
  Button,
  Text,
  Flex,
  Grid,
  Heading,
  useToast,
  Select,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Annotation from "@clearbothk/react-image-annotation"
import _ from "lodash"
import { LabelList } from "../components/label/labellist"
import { SendLabels } from "../components/label/sendlabels"

const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: any
  onChange: any
}) => (
  <Select value={value} onChange={onChange}>
    {options.map(op => (
      <option value={op}>{op}</option>
    ))}
  </Select>
)

const Label = ({ data }) => {
  console.log(data)
  const [annotations, setAnnotations] = useState([])
  const [annotation, setCurrentAnnotation] = useState({})
  const [imageURL, setImageURL] = useState("")
  const [loadingImage, setLoadingImage] = useState(false)

  const toast = useToast()
  const onSubmit = annotation => {
    const { geometry, data } = annotation
    const geometryRounded = _.mapValues(geometry, val =>
      isNaN(val) ? val : _.round(val, 3)
    )
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

    try {
      const response = await fetch(uri)
      const { image } = await response.json()
      setLoadingImage(false)
      setImageURL(image || "")
      console.log(image)
      if (image === undefined) {
        toast({
          title: "There are no more images that need labelling.",
          description:
            "We might have more images after midnight! Please try again later.",
          status: "info",
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (e) {
      console.log(e)
      toast({
        title: "There was an error in connecting to the server",
        description: "Please try again later",
        status: "info",
        duration: 5000,
        isClosable: true,
      })
      setLoadingImage(false)
    }
  }

  function reset() {
    setAnnotations([])
    setCurrentAnnotation({})
    setImageURL("")
    getImageFromAzure()
  }
  return (
    <Layout>
      <SEO title="Labelling Tool" />
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "2fr 1fr", "2fr 1fr"]}
        m={10}
        gridGap={10}
      >
        <Box maxW="5xl">
          {imageURL ? (
            <Annotation
              src={imageURL}
              annotations={annotations}
              value={annotation}
              onChange={setCurrentAnnotation}
              onSubmit={onSubmit}
              renderInputArea={props => (
                <Dropdown {...props} options={data.site.siteMetadata.taco} />
              )}
            />
          ) : (
            <Flex minH="md" alignItems="center" justifyContent="center">
              <Button onClick={getImageFromAzure} isLoading={loadingImage}>
                <Text>Get images to start annotation</Text>
              </Button>
            </Flex>
          )}
        </Box>
        <Box>
          <Flex alignItems="center">
            <Heading fontSize={["xl", "xl", "xl", "xl", "2xl"]} flex="1 1 auto">
              Annotations
            </Heading>
            <Button
              mr={2}
              onClick={getImageFromAzure}
              isLoading={loadingImage}
              isDisabled={imageURL === ""}
            >
              Next
            </Button>
            <SendLabels
              image={imageURL}
              annotations={annotations}
              reset={reset}
            />
          </Flex>
          <LabelList
            annotations={annotations}
            setAnnotations={setAnnotations}
          />
        </Box>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        taco
      }
    }
  }
`

export default Label
