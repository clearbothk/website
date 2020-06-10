import React, { useState, useEffect } from "react"
import { Button, useToast } from "@chakra-ui/core"

export const SendLabels = ({ image, annotations }) => {
  const toast = useToast()
  const [loadingLabelsRequest, setLoadingLabelsRequest] = useState(false)

  useEffect(() => {
    console.log(annotations)
  }, [annotations])

  async function sendLabels() {
    console.log(annotations)
    if (annotations && annotations.length > 0) {
      setLoadingLabelsRequest(true)
      const uri =
        process.env.NODE_ENV === "development"
          ? "/api/CreateLabels"
          : "https://clearbotdatabuilder0.azurewebsites.net/api/CreateLabels?code=sD8JK3NmbOxgxRF4ZsqtYTOeUdCTOvq3bkNEMjrySFihINMEdfxtlA=="
      await fetch(uri, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          image,
          labels: annotations,
        }),
      })
      setLoadingLabelsRequest(false)
    } else {
      toast({
        title: "Did you mark any annotations?",
        description: "Please make some annotations in the image first",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Button
      onClick={sendLabels}
      isLoading={loadingLabelsRequest}
      isDisabled={annotations.length === 0}
    >
      Submit
    </Button>
  )
}
