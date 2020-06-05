import React, { useState, useEffect } from "react"
import { Text, useToast, Flex } from "@chakra-ui/core"

import { BlobServiceClient } from "@azure/storage-blob"
import { useDropzone } from "react-dropzone"

export const UploadArea = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "application/zip" })

  const toast = useToast()
  const [uploadedFiles, setUploadedFiles] = useState([])

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

  const azureUpload = async (data: File) => {
    const response = await fetch("/api/GenerateUploadToken")
    const r = await response.json()
    const sas = r.token
    const blockBlobClient = new BlobServiceClient(
      `https://vision4458150196.blob.core.windows.net?${sas}`
    )
      .getContainerClient("uploads")
      .getBlockBlobClient(r.name)
    const uploadBlobResponse = await blockBlobClient.upload(data, data.size)
    return uploadBlobResponse
  }

  useEffect(() => {
    const files = acceptedFiles.filter(file => uploadedFiles.indexOf(file) < 0)
    files.map(file => {
      azureUpload(file).then(res => {
        console.log(res)
        console.log(
          toast({
            title: "File uploaded to cloud storage",
            description:
              "You can upload more files by dropping them in the box",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        )
      })
      setUploadedFiles([...uploadedFiles, file])
    })
  }, [acceptedFiles])

  return (
    <Flex
      {...getRootProps({ className: "dropzone" })}
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
      <Text>Just drop ZIP files here and they will be uploaded</Text>
    </Flex>
  )
}
