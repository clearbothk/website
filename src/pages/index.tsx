import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/index/banner"
import { Press } from "../components/index/press"
import { Awards } from "../components/index/awards"
import { Contribution } from "../components/index/contribution"
import { Contact } from "../components/index/contact"
import { HeaderVideo } from "../components/index/headervideo"
import vidClearbotHeader from "../videos/clearbot.mp4"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <HeaderVideo vidSrc={vidClearbotHeader} />
      <Press scmp={data.scmp.childImageSharp.fluid} />
      <Awards
        awards={[
          data.jumpstarter.childImageSharp.fluid,
          data.ggcs.childImageSharp.fluid,
        ]}
      />
      <Contribution
        prediction={data.prediction.childImageSharp.fluid}
        helpus={data.helpus.childImageSharp.fluid}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banner2.jpg" }) {
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
    helpus: file(relativePath: { eq: "helpus.png" }) {
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
