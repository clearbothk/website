export const uploadTokenAPIURI =
  process.env.NODE_ENV === "development"
    ? "/api/GenerateUploadToken"
    : "https://clearbotdatabuilder0.azurewebsites.net/api/GenerateUploadToken?code=jV6T1zWPoGYaZFSum2Wf2uN1rRLvFk5meRuRAAHbR53FfRsUTZIPNw=="

export const reviewFetchURI =
  process.env.NODE_ENV === "development"
    ? "/api/GetReviewImage"
    : "https://clearbotdatabuilder0.azurewebsites.net/api/GetReviewImage?code=jV6T1zWPoGYaZFSum2Wf2uN1rRLvFk5meRuRAAHbR53FfRsUTZIPNw=="
export const reviewCompleteURI =
  process.env.NODE_ENV === "development"
    ? "/api/CompleteReviewImage"
    : "https://clearbotdatabuilder0.azurewebsites.net/api/CompleteReviewImage?code=jV6T1zWPoGYaZFSum2Wf2uN1rRLvFk5meRuRAAHbR53FfRsUTZIPNw=="
