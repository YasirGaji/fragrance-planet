import {
  createSystem,
  defaultBaseConfig,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';

const customConfig = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
  },

  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#FCB700' }, //primary color
          100: { value: '#333333' }, //secondary color
          200: { value: '#FFFFFF' }, //background color
          300: { value: '#F0EFED' }, //background hover color
          400: { value: '#333333' }, //text color

          500: { value: '#D3CED1' }, //navbar light background color
          600: { value: '#0A0F29' }, //navbar dark background color
          700: { value: '#27272A' }, //newsletter section dark color
          800: { value: '#27272A' }, //footer section light color
        },
      },

      animations: {
        shakeX: { value: 'shakeX 1s ease-in-out infinite' },
      },

      spacing: {
        '128': { value: '32rem' },
        '144': { value: '36rem' },
      },

      sizes: {
        '1/7': { value: '14.285%' },
        '2/7': { value: '28.571%' },
        '3/7': { value: '42.857%' },
      },
    },

    semanticTokens: {
      colors: {
        brand: {
          primary: { value: '{colors.brand.50}' },
          secondary: { value: '{colors.brand.100}' },
          background: { value: '{colors.brand.400}' },
          backgroundHover: { value: '{colors.brand.300}' },
          navbar: {
            DEFAULT: {
              value: {
                _light: '{colors.brand.500}',
                _dark: '{colors.brand.600}',
              },
            },
          },
          newsletter: {
            DEFAULT: {
              value: {
                _light: '{colors.brand.500}',
                _dark: '{colors.brand.700}',
              },
            },
          },
          footer: {
            DEFAULT: {
              value: {
                _light: '{colors.brand.800}',
                _dark: '{colors.brand.600}',
              },
            },
          },
          icon: {
            DEFAULT: {
              value: {
                _light: '{colors.brand.500}',
                _dark: '{colors.brand.600}',
              },
            },
          },
          text: {
            DEFAULT: {
              value: {
                _light: '{colors.brand.400}',
                _dark: '{colors.brand.200}',
              },
            },
          },
        },

        fg: {
          DEFAULT: {
            value: { _light: '{colors.black}', _dark: '#e5e5e5' }, // Custom dark text color
          },
          muted: {
            value: { _light: '{colors.gray.600}', _dark: '#a3a3a3' }, // Custom dark muted text
          },
        },

        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '#404040' }, // Custom dark border
          },
        },
      },
    },

    keyframes: {
      shakeX: {
        '0%, 100%': { transform: 'translateX(-100%)' },
        '50%': { transform: 'translateX(100%)' },
      },
    },
  },
});

export const system = createSystem(
  defaultBaseConfig,
  defaultConfig,
  customConfig
);
