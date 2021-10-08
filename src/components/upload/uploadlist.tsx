import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  CircularProgress,
  Heading,
  Badge,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useAzureUpload, useUploadList } from "../../contexts/uploader"

export interface UploadListItem {
  file: File
}

const UploadListItem: React.FC<UploadListItem> = ({ file }) => {
  const [progress, setProgress] = useState(0)
  const upload = useAzureUpload()

  useEffect(() => {
    upload(file, setProgress)
  }, [])

  return (
    <ListItem py={2}>
      <Flex justifyContent="space-between">
        <Box overflowX="hidden">
          <Text>{file.name}</Text>
        </Box>
        <Flex justifyContent="center">
          {progress < 100 ? (
            <CircularProgress
              value={progress}
              capIsRound={true}
              thickness="14px"
              size={6}
            />
          ) : (
            <Badge colorScheme="green">Success</Badge>
          )}
        </Flex>
      </Flex>
    </ListItem>
  )
}

const UploadList = () => {
  const files = useUploadList()
  return (
    <Flex mx="auto" maxW="5xl" flexDirection="column" my={12}>
      <Heading>Files list</Heading>
      <List w="100%">
        {files.map(file => (
          <UploadListItem key={file.name} file={file} />
        ))}
      </List>
    </Flex>
  )
}

export default UploadList
