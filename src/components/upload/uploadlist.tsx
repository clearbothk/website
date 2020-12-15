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
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useAzureUpload, useUploadList } from "../../contexts/uploader"

const UploadListItems: React.FC<any> = ({ file }) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    useAzureUpload(file, setProgress)
  }, [])

  return (
    <ListItem py={2}>
      <Grid templateColumns="1fr 1fr" alignItems="center">
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
      </Grid>
    </ListItem>
  )
}

const UploadList = () => {
  const files = useUploadList()
  console.log(files)

  return (
    <Flex mx="auto" maxW="5xl" flexDirection="column" my={12}>
      <Heading>Uploaded files</Heading>
      <List w="100%">
        {files.map((file, index) => (
          <UploadListItems key={file.name} file={file} />
        ))}
      </List>
    </Flex>
  )
}

export default UploadList
