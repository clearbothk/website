import React, { useContext, useState } from "react"
import { BlobServiceClient } from "@azure/storage-blob"
import { uploadTokenAPIURI } from "../constants/azureAPI"

export interface FileUploadContext {
  files: File[]
  userEmail: string
  setUserEmail: React.Dispatch<React.SetStateAction<string>>
  addFileToUploadList: (file: File) => void
  clearFiles: () => void
}

const FileUploadContext = React.createContext<FileUploadContext>({
  files: [],
  userEmail: undefined,
  addFileToUploadList: (file: File) => {},
  clearFiles: () => {},
  setUserEmail: () => {},
})

const FileUploadProvider = ({ children }) => {
  const [files, setFiles] = useState<File[]>([])
  const [userEmail, setUserEmail] = useState<string>("")

  const addFileToUploadList = (file: File) => {
    setFiles(oldFilesList => {
      const newFilesList = [file, ...oldFilesList]
      return newFilesList
    })
  }

  const clearFiles = () => {
    setFiles([])
  }

  return (
    <FileUploadContext.Provider
      value={{
        files,
        addFileToUploadList,
        clearFiles,
        userEmail,
        setUserEmail,
      }}
    >
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

export const useClearUploadList = () => {
  try {
    const { clearFiles } = React.useContext(FileUploadContext)
    return clearFiles
  } catch (err) {
    throw err
  }
}

export const useAddFileToUploadList = () => {
  const { addFileToUploadList } = React.useContext(FileUploadContext)
  return addFileToUploadList
}

export const useUserEmail = () => {
  const { userEmail, setUserEmail } = React.useContext(FileUploadContext)
  return { userEmail, setUserEmail }
}

export const useAzureUpload = () => {
  const { userEmail: email } = React.useContext(FileUploadContext)
  const upload = async (file: File, setProgress) => {
    const filename = file.name
    const response = await fetch(uploadTokenAPIURI, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename, email }),
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
        setProgress((loadedBytes / totalSize) * 100.0)
      },
    })
    return uploadBlobResponse
  }
  return upload
}

export default FileUploadProvider
