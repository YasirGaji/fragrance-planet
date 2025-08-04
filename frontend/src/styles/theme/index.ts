import {
  createSystem,
  defaultBaseConfig,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

import { colors, semanticColors } from "./colors";
import { fonts, spacing, sizes, animations, keyframes, breakpoints } from "./foundations";
// import { components } from "./components";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: fonts.body,
    },
  },

  theme: {
    tokens: {
      colors,
      animations,
      spacing,
      sizes,
      breakpoints,
    },

    semanticTokens: {
      colors: semanticColors,
    },

    keyframes,
  },

});

export const system = createSystem(
  defaultBaseConfig,
  defaultConfig,
  customConfig
);

export type SystemTheme = typeof system;