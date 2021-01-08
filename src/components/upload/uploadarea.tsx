import React, { useState, useEffect, useCallback } from "react"
import {
  Text,
  useToast,
  Box,
  Flex,
  Progress,
  Button,
  Input,
} from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import {
  useAddFileToUploadList,
  useAzureUpload,
  useUserEmail,
} from "../../contexts/uploader"

export const UploadArea = () => {
  const toast = useToast()
  const addFileToUploadList = useAddFileToUploadList()
  const [email, setEmail] = useState("")
  const { userEmail, setUserEmail } = useUserEmail()

  const onEmailSubmit = () => {
    setUserEmail(email)
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.map(file => {
        addFileToUploadList(file)
      })
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
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: onDrop,
    disabled: userEmail.length === 0,
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
    <>
      <Flex maxW="5xl" margin="auto" my={10}>
        <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Button colorScheme="teal" onClick={onEmailSubmit}>
          Set Email
        </Button>
      </Flex>
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
        h="3xs"
        backgroundColor="#fafafa"
        maxW="5xl"
        margin="auto"
      >
        <input {...getInputProps()} />
        {userEmail.length > 0 ? (
          <Text>Drop files here</Text>
        ) : (
          <Text>Enter email address</Text>
        )}
      </Flex>
    </>
  )
}
