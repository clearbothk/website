import React from "react"
import Layout from "../components/layout"
import PaginatedReviewView from "../components/review/PaginatedReviewView"
import SEO from "../components/seo"
import ReviewContextProvider from "../contexts/reviewer"

const ReviewPage = () => {
  return (
    <ReviewContextProvider>
      <Layout>
        <SEO title="Review images" />
        <PaginatedReviewView />
      </Layout>
    </ReviewContextProvider>
  )
}

export default ReviewPage
