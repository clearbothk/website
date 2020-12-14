import React, { useState, useEffect } from "react"
import { Text, useToast, Box, Flex, Progress } from "@chakra-ui/react"

import { BlobServiceClient } from "@azure/storage-blob"
import { useDropzone } from "react-dropzone"

export const UploadArea = () => {
  const toast = useToast()
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [currentUploadFile, setCurrentUploadFile] = useState("")

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
    disabled: uploading,
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

  function onUploadProgress(totalSize, progress) {
    const { loadedBytes } = progress
    setProgressValue((loadedBytes / totalSize) * 100.0)
  }

  const azureUpload = async (data: File) => {
    const totalSize = data.size
    const uri =
      process.env.NODE_ENV === "development"
        ? "/api/GenerateUploadToken"
        : "https://clearbotdatabuilder0.azurewebsites.net/api/GenerateUploadToken?code=jV6T1zWPoGYaZFSum2Wf2uN1rRLvFk5meRuRAAHbR53FfRsUTZIPNw=="
    const filename = data.name
    const response = await fetch(uri, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename }),
    })
    const r = await response.json()
    const sas = r.token
    const blockBlobClient = new BlobServiceClient(
      `https://vision4458150196.blob.core.windows.net?${sas}`
    )
      .getContainerClient("uploads")
      .getBlockBlobClient(r.name)
    const uploadBlobResponse = await blockBlobClient.uploadBrowserData(data, {
      onProgress: progress => onUploadProgress(totalSize, progress),
    })
    return uploadBlobResponse
  }

  useEffect(() => {
    setUploading(true)
    const files = acceptedFiles.filter(file => uploadedFiles.indexOf(file) < 0)
    if (files.length > 0) {
      Promise.all(
        files.map(async file => {
          setCurrentUploadFile(file.name)
          await azureUpload(file)
          toast({
            title: "File uploaded to cloud storage",
            description:
              "You can upload more files by dropping them in the box",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          setUploadedFiles([...uploadedFiles, file])
          setProgressValue(0)
        })
      ).then(() => {
        setUploading(false)
      })
    } else {
      setUploading(false)
    }
  }, [acceptedFiles])

  if (uploading) {
    return (
      <Flex
        p={[4, 4, 4, 4, 4]}
        justifyContent="center"
        alignItems="center"
        borderWidth="2px"
        borderRadius="2px"
        borderStyle="dashed"
        outline="none"
        h="sm"
        backgroundColor="#fafafa"
        maxW="5xl"
        margin="auto"
      >
        <Box w="100%" textAlign="center">
          <Text>Uploading {currentUploadFile}</Text>
          <Progress
            hasStripe
            isAnimated
            value={progressValue}
            w="100%"
            mt={5}
          />
        </Box>
      </Flex>
    )
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
      <input {...getInputProps()} />{" "}
      <Text>Just drop ZIP files here and they will be uploaded</Text>{" "}
    </Flex>
  )
}
