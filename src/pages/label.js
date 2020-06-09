import React, { useState } from "react"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Annotation from "@clearbothk/react-image-annotation"
import _ from "lodash"

import * as img from "../images/banner.jpg"

const Label = () => {
  const [annotations, setAnnotations] = useState([])
  const [annotation, setCurrentAnnotation] = useState({})

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

  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <SEO title="Labelling Tool" />
        <Box maxW="5xl">
          <Annotation
            src={img}
            annotations={annotations}
            value={annotation}
            onChange={setCurrentAnnotation}
            onSubmit={onSubmit}
          />
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Label
