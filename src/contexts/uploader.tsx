import React, { useContext, useState } from "react"
import { BlobServiceClient } from "@azure/storage-blob"
import { uploadTokenAPIURI } from "../constants/azureAPI"

export interface FileUploadContext {
  files: File[]
  addFileToUploadList: (file: File) => void
}

const FileUploadContext = React.createContext<FileUploadContext>({
  files: [],
  addFileToUploadList: (file: File) => {},
})

const FileUploadProvider = ({ children }) => {
  const [files, setFiles] = useState<File[]>([])

  const addFileToUploadList = (file: File) => {
    setFiles(oldFilesList => {
      const newFilesList = [file, ...oldFilesList]
      return newFilesList
    })
  }

  return (
    <FileUploadContext.Provider value={{ files, addFileToUploadList }}>
      {children}
    </FileUploadContext.Provider>
  )
}

export const useUploadList = () => {
  try {
    const { files } = React.useContext(FileUploadContext)
    return files
  } catch (err) {
    throw err
  }
}

export const useAddFileToUploadList = () => {
  const { addFileToUploadList } = React.useContext(FileUploadContext)
  return addFileToUploadList
}

export const useAzureUpload = async (file: File, setProgressValue) => {
  const filename = file.name
  const response = await fetch(uploadTokenAPIURI, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filename }),
  })
  // Token and filename that is returned from the API
  const { token, name } = await response.json()
  const blockBlobClient = new BlobServiceClient(
    `https://vision4458150196.blob.core.windows.net?${token}`
  )
    .getContainerClient("uploads")
    .getBlockBlobClient(name)
  const uploadBlobResponse = await blockBlobClient.uploadData(file, {
    onProgress: progress => {
      const totalSize = file.size
      const { loadedBytes } = progress
      setProgressValue((loadedBytes / totalSize) * 100.0)
    },
  })
  return uploadBlobResponse
}

export default FileUploadProvider
