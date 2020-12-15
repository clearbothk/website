export const uploadTokenAPIURI =
  process.env.NODE_ENV === "development"
    ? "/api/GenerateUploadToken"
    : "https://clearbotdatabuilder0.azurewebsites.net/api/GenerateUploadToken?code=jV6T1zWPoGYaZFSum2Wf2uN1rRLvFk5meRuRAAHbR53FfRsUTZIPNw=="
