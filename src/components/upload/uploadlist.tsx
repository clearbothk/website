import {
  Box,
  Flex,
  Grid,
  List,
  ListItem,
  Progress,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import {
  useAzureUpload,
  useClearUploadList,
  useUploadList,
} from "../../contexts/uploader"

const UploadListItem: React.FC<any> = ({ file, doUpload, email }) => {
  const [progress, setProgress] = useState<number>(0)
  const upload = useAzureUpload()

  useEffect(() => {
    if (!!doUpload) {
      upload(file, setProgress, email)
    }
  }, [doUpload])

  return (
    <ListItem py={2}>
      <Flex justifyContent="space-between">
        <Box overflowX="hidden">
          <Text>{file.name}</Text>
        </Box>
        <Flex justifyContent="center">
          <CircularProgress
            value={progress}
            capIsRound={true}
            thickness="14px"
            size={6}
          />
        </Flex>
      </Flex>
    </ListItem>
  )
}

const UploadList = () => {
  const files = useUploadList()
  const toast = useToast()
  const [doUpload, setDoUpload] = useState(false)
  const [email, setEmail] = useState("")
  const clearFiles = useClearUploadList()

  const onEmailSubmit = () => {
    if (email.length > 0) {
      setDoUpload(true)
    } else {
      toast({
        title: "Please enter an email address first",
        description:
          "This email address will help us uniquely identify your contributuions.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex mx="auto" maxW="5xl" flexDirection="column" my={12}>
      <Box>
        <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          isDisabled={doUpload}
        />
      </Box>
      <Flex flexDir="row" my={10} justifyContent="space-between">
        <Heading>Files list</Heading>
        <Flex>
          <Button colorScheme="red" mx={4} onClick={clearFiles}>
            Clear
          </Button>
          <Button colorScheme="teal" onClick={onEmailSubmit}>
            Upload
          </Button>
        </Flex>
      </Flex>
      <List w="100%">
        {files.map((file, index) => (
          <UploadListItem
            key={file.name}
            doUpload={doUpload}
            file={file}
            email={email}
          />
        ))}
      </List>
    </Flex>
  )
}

export default UploadList
