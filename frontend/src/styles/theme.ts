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
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
