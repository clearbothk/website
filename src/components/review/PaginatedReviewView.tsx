import { Flex, Grid, Text, Image, Box, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  Container,
} from "chakra-paginator"
import { useApprover, useReviewFilePaginated } from "../../contexts/reviewer"

function PaginatedReviewViewElement({ imageFile }) {
  const approve = useApprover()
  const [isLoading, setLoading] = useState(false)

  return (
    <Flex key={imageFile.filename} direction="column" py={4}>
      <Image src={`${imageFile.uri}?${imageFile.sas}`} />
      <Flex m="auto" py="4">
        <Button
          variant="outline"
          colorScheme="green"
          mx={2}
          onClick={async () => {
            setLoading(true)
            await approve(imageFile.filename, true)
            setLoading(false)
          }}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Approve
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          mx={2}
          onClick={async () => {
            setLoading(true)
            await approve(imageFile.filename, false)
            setLoading(false)
          }}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Reject
        </Button>
      </Flex>
    </Flex>
  )
}

export default function PaginatedReviewView() {
  const [page, setCurrentPage] = useState(1)
  const { getPage, totalPages } = useReviewFilePaginated()

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage)
  }

  return (
    <Flex direction="column">
      <Grid templateColumns="1fr 1fr 1fr 1fr" gridGap={8} maxW="6xl" m="auto">
        {getPage(page).map(imageFile => {
          console.log(page, imageFile)
          return <PaginatedReviewViewElement imageFile={imageFile} />
        })}
      </Grid>
      <Paginator
        innerLimit={3}
        outerLimit={2}
        currentPage={page}
        onPageChange={handlePageChange}
        pagesQuantity={totalPages}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous bg="green.300">Previous</Previous>
          <PageGroup isInline align="center" />
          <Next bg="green.300">Next</Next>
        </Container>
      </Paginator>
    </Flex>
  )
}
