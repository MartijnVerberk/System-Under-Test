import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { buttonRecipe } from "./theme/button.recipe"

// TODO: Add Sogeti fonts
// If changed, run "npx chakra typegen .\frontend\src\theme.tsx"
const extendedConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        sogeti: {
          // TODO: Add more Sogeti colors: 
          red: { value: "#FF4019" },
          blue: { value: "#0070AD" },
          vibrant: { value: "#12ABDB" },
        },
        ui: {
          main: { value: "#009688" },
        },
      },
    },
    // TODO: add semantic tokens for Sogeti colors: https://chakra-ui.com/docs/theming/customization/colors#color-palette
    semanticTokens: {
      colors: {
        sogeti: {
          solid: { value: "{colors.sogeti.blue}" },
          contrast: { value: "{#ffffff}" },
          fg: { value: "{colors.sogeti.red}" },
          muted: { value: "{colors.sogeti.red}" },
          subtle: { value: "{colors.sogeti.red}" },
          emphasized: { value: "{colors.sogeti.red}" },
          focusRing: { value: "{colors.sogeti.red}" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})


export const system = createSystem(defaultConfig, extendedConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
  },
})
