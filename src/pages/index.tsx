import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/index/banner"
import { Press } from "../components/index/press"
import { Awards } from "../components/index/awards"
import { Contribution } from "../components/index/contribution"
import { Contact } from "../components/index/contact"

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brandYellow: "#F9C100",
    brandBlue: "#0099AA",
  },
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
}

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <SEO title="Home" />
        <Banner image={data.banner.childImageSharp.fluid} />
        <Press scmp={data.scmp.childImageSharp.fluid} />
        <Awards
          awards={[
            data.jumpstarter.childImageSharp.fluid,
            data.ggcs.childImageSharp.fluid,
          ]}
        />
        <Contribution prediction={data.prediction.childImageSharp.fluid} />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    scmp: file(relativePath: { eq: "scmp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    jumpstarter: file(relativePath: { eq: "jumpstarter.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    ggcs: file(relativePath: { eq: "ggcs.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    prediction: file(relativePath: { eq: "predictions.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
