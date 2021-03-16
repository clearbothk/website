import {
  Flex,
  Grid,
  Text,
  Image,
  Box,
  Button,
  Checkbox,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  Container,
} from "chakra-paginator"
import {
  ReviewBlob,
  useApprover,
  useReviewFilePaginated,
} from "../../contexts/reviewer"

function PaginatedReviewViewElement({ imageFile }) {
  const approve = useApprover()
  const [isLoading, setLoading] = useState(false)

  return (
    <Flex key={imageFile.filename} direction="row" py={4} alignItems="center">
      <Image
        src={`${imageFile.uri}?${imageFile.sas}`}
        boxSize={20}
        justifySelf="flex-start"
      />
      <Text px={2}>{imageFile.filename}</Text>
      <Flex ml="auto" py="4">
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
  const { files, getPage, totalPages, loading } = useReviewFilePaginated()
  const [imageFiles, setImageFiles] = useState<ReviewBlob[]>([])
  const [allSelected, setAllSelected] = useState<boolean>(false)
  const [allApprovalLoading, setAllApprovalLoading] = useState<boolean>(false)
  const approve = useApprover()

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage)
  }

  useEffect(() => {
    if (!loading) {
      setImageFiles(getPage(page))
    }
  }, [loading, allApprovalLoading])

  useEffect(() => {
    setImageFiles(getPage(page))
  }, [page])

  useEffect(() => {
    if (!allApprovalLoading) {
      setImageFiles(getPage(page))
    }
  }, [files])

  function approveAll() {
    setAllApprovalLoading(true)
    Promise.all(
      imageFiles.map(imageFile => {
        return approve(imageFile.filename, true)
      })
    ).then(() => {
      setAllApprovalLoading(false)
    })
  }

  if (loading) {
    return <Text>Loading</Text>
  }

  return (
    <Flex maxW="6xl" direction="column" m="auto">
      <Flex>
        <Checkbox
          isChecked={allSelected}
          onChange={e => {
            if (e.target.checked) {
              setAllSelected(true)
            } else {
              setAllSelected(false)
            }
          }}
        >
          Select all
        </Checkbox>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mx={4}
          isDisabled={!allSelected || allApprovalLoading}
          isLoading={allApprovalLoading}
          onClick={approveAll}
        >
          Approve all
        </Button>
      </Flex>
      <Flex direction="column">
        {imageFiles.map(imageFile => {
          console.log(page, imageFile)
          return <PaginatedReviewViewElement imageFile={imageFile} />
        })}
      </Flex>
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
