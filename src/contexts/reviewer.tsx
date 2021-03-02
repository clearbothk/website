import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { reviewCompleteURI, reviewFetchURI } from "../constants/azureAPI"

interface ReviewBlob {
  filename: string
  uri: string
  sas: string
}

interface ReviewContext {
  files: ReviewBlob[]
  setFiles: React.Dispatch<React.SetStateAction<ReviewBlob[]>>
}

const ReviewContext = createContext<ReviewContext>({
  files: [],
  setFiles: () => {},
})

const ReviewContextProvider = ({ children }) => {
  const [reviewData, setReviewData] = useState<ReviewBlob[]>([])
  useEffect(() => {
    fetch(reviewFetchURI, {
      method: "GET",
    }).then(async data => {
      const reviewData: ReviewBlob[] = await data.json()
      const cdnData = reviewData.map(reviewDataFile => {
        const cdnURL = reviewDataFile.uri.replace(
          "https://vision4458150196.blob.core.windows.net",
          "https://clearbotimagereview.azureedge.net"
        )
        return {
          ...reviewDataFile,
          uri: cdnURL,
        }
      })
      setReviewData(cdnData)
    })
  }, [])

  return (
    <ReviewContext.Provider
      value={{
        files: reviewData,
        setFiles: setReviewData,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export const useReviewFilePaginated = () => {
  const { files } = useContext(ReviewContext)
  const pageSize = 20
  const getPage = page => files.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(files.length / pageSize)
  return { getPage, totalPages }
}

export const useApprover = () => {
  const { files, setFiles } = useContext(ReviewContext)

  return (image_name: string, approved: boolean) => {
    return new Promise((resolve, reject) => {
      fetch(reviewCompleteURI, {
        method: "POST",
        body: JSON.stringify({ image_name, approved }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if (response.status === 200) {
          setFiles(prev => {
            return prev.filter(x => x.filename !== image_name)
          })
          resolve("OK")
        } else {
          reject(response.status)
        }
      })
    })
  }
}
export default ReviewContextProvider
