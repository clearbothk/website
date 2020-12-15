import React, { useState, useEffect, useCallback } from "react"
import { Text, useToast, Box, Flex, Progress } from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import { useAddFileToUploadList } from "../../contexts/uploader"
import { add } from "lodash"

export const UploadArea = () => {
  const toast = useToast()
  const addFileToUploadList = useAddFileToUploadList()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.map(addFileToUploadList)
    },
    [addFileToUploadList]
  )

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept:
      "application/zip, application/x-zip-compressed, image/jpeg, image/png, image/jpg",
    onDrop: onDrop,
  })

  function getColor(): string {
    if (isDragAccept) {
      return "#00e676"
    } else if (isDragReject) {
      return "#ff1744"
    } else if (isDragActive) {
      return "#2196f3"
    }
    return "#eeeeee"
  }

  return (
    <Flex
      {...getRootProps({ className: `dropzone` })}
      transition="border .24s ease-in-out"
      p={[4, 4, 4, 4, 4]}
      justifyContent="center"
      alignItems="center"
      borderWidth="2px"
      borderRadius="2px"
      borderColor={getColor()}
      borderStyle="dashed"
      outline="none"
      h="sm"
      backgroundColor="#fafafa"
      maxW="5xl"
      margin="auto"
    >
      <input {...getInputProps()} />
      <Text>Drop files here to upload</Text>
    </Flex>
  )
}
