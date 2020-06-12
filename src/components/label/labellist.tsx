import React, { useRef, useEffect } from "react"
import { Stack, Box, Flex, Text, IconButton } from "@chakra-ui/core"
import { keyframes } from "@emotion/core"

const deleteAnnotation = (key, annotations, setAnnotations) => {
  const filteredAnnotations = annotations.filter(ann => ann.data.id !== key)
  setAnnotations(filteredAnnotations)
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const LabelList = ({ annotations, setAnnotations }) => {
  const annotationsScrollRef = useRef(null)

  useEffect(() => {
    annotationsScrollRef.current.scrollTop =
      annotationsScrollRef.current.scrollHeight
  }, [annotations])

  return (
    <Stack
      mt={5}
      maxH={["md", "md", "md", "lg", "xl"]}
      overflow="scroll"
      ref={annotationsScrollRef}
    >
      {annotations.map(annotation => (
        <Flex
          p={5}
          shadow="sm"
          border="2px solid black"
          borderRadius="lg"
          alignItems="center"
          justify="space-between"
          animation={`${fadeIn} 1s ease`}
          key={annotation.data.id}
        >
          <Box>
            <Text fontSize={["md", "md", "lg", "xl", "2xl"]}>
              {annotation.data.text}
            </Text>
            <Text fontSize="xs">{`x: ${annotation.geometry.x}, y: ${annotation.geometry.y}, width: ${annotation.geometry.width}, height: ${annotation.geometry.height}`}</Text>
          </Box>

          <IconButton
            aria-label="Search database"
            variant="outline"
            icon="delete"
            onClick={e => {
              deleteAnnotation(annotation.data.id, annotations, setAnnotations)
            }}
          />
        </Flex>
      ))}
    </Stack>
  )
}
