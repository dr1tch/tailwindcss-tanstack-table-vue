import type { Preview } from "@storybook/vue3"
import "../src/style/main.css"
import { withThemeByDataAttribute } from "@storybook/addon-themes"
import { themes } from "@storybook/theming"

/* snipped for brevity */

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "black" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "white" },
      current: "light",
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
  ],
}

export default preview
