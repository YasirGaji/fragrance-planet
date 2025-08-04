export const colors = {
  brand: {
    50: { value: "#FCB700" }, // primary color
    100: { value: "#333333" }, // secondary color
    200: { value: "#FFFFFF" }, // background color
    300: { value: "#F0EFED" }, // background hover color
    400: { value: "#333333" }, // text color
    500: { value: "#D3CED1" }, // navbar light background color
    600: { value: "#0A0F29" }, // navbar dark background color
    700: { value: "#27272A" }, // newsletter section dark color
    800: { value: "#27272A" }, // footer section light color
    900: { value: "#E4E4E7" }, // hero Products section light color
    1000: { value: "#121E5E" }, // hero Products title section light color
  },
};

export const semanticColors = {
  brand: {
    primary: { value: "{colors.brand.50}" },
    secondary: { value: "{colors.brand.100}" },
    background: { value: "{colors.brand.400}" },
    backgroundHover: { value: "{colors.brand.300}" },
    navbar: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.200}",
          _dark: "{colors.brand.600}",
        },
      },
    },
    newsletter: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.500}",
          _dark: "{colors.brand.700}",
        },
      },
    },
    footer: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.800}",
          _dark: "{colors.brand.600}",
        },
      },
    },
    icon: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.500}",
          _dark: "{colors.brand.600}",
        },
      },
    },
    text: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.400}",
          _dark: "{colors.brand.200}",
        },
      },
    },
    HeroProducts: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.900}",
          _dark: "{colors.brand.800}",
        },
      },
    },
    HeroProductsTitle: {
      DEFAULT: {
        value: {
          _light: "{colors.brand.1000}",
          _dark: "{colors.brand.50}",
        },
      },
    },
  },
  fg: {
    DEFAULT: {
      value: { _light: "{colors.black}", _dark: "#e5e5e5" },
    },
    muted: {
      value: { _light: "{colors.gray.600}", _dark: "#a3a3a3" },
    },
  },
  border: {
    DEFAULT: {
      value: { _light: "{colors.gray.200}", _dark: "#404040" },
    },
  },
};
