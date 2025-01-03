import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#FCB700' }, //primary color
          100: { value: '#0A0F29' }, //secondary color
          200: { value: '#FFFFFF' }, //background color
          300: { value: '#F0EFED' }, //background hover color
          400: { value: '#333333' }, //text color
        },
      },

      animations: {
        shakeX: { value: "shakeX 1s ease-in-out infinite" },
      },

      spacing: {
        "128": { value: "32rem" },
        "144": { value: "36rem" },
      },

      sizes: {
        "1/7": { value: "14.285%" },
        "2/7": { value: "28.571%" },
        "3/7": { value: "42.857%" },
      },
    },

    semanticTokens: {
      colors: {
        brand: {
          primary: { value: '{colors.brand.50}' },
          secondary: { value: '{colors.brand.100}' },
          background: { value: '{colors.brand.200}' },
          backgroundHover: { value: '{colors.brand.300}' },
          text: { value: '{colors.brand.400}' },
        },
      },
    },

    keyframes: {
      shakeX: {
        "0%, 100%": { transform: "translateX(-100%)" },
        "50%": { transform: "translateX(100%)" },
      },
    },

  
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
