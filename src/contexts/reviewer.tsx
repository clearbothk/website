import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { reviewCompleteURI, reviewFetchURI } from "../constants/azureAPI"

export interface ReviewBlob {
  filename: string
  uri: string
  sas: string
}

interface ReviewContext {
  files: ReviewBlob[]
  setFiles: React.Dispatch<React.SetStateAction<ReviewBlob[]>>
  loading: boolean
}

const ReviewContext = createContext<ReviewContext>({
  files: [],
  setFiles: () => {},
  loading: true,
})

const ReviewContextProvider = ({ children }) => {
  const [reviewData, setReviewData] = useState<ReviewBlob[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [reviewData])

  useEffect(() => {
    setLoading(true)
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
        loading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export const useReviewFilePaginated = () => {
  const { files, loading } = useContext(ReviewContext)
  const pageSize = 40
  const getPage = page => files.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(files.length / pageSize)
  return { files, getPage, totalPages, loading }
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
