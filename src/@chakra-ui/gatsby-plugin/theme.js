import { theme } from "@chakra-ui/react"

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brandYellow: "#F9C100",
    brandBlue: "#0099AA",
  },
  fonts: {
    ...theme.fonts,
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
}

export default customTheme
