export const components = {
  Button: {
    baseStyle: {
      fontWeight: "medium",
      borderRadius: "md",
    },
    variants: {
      primary: {
        bg: "brand.primary",
        color: "white",
        _hover: {
          bg: "brand.primary",
          opacity: 0.9,
        },
      },
      secondary: {
        bg: "brand.secondary",
        color: "white",
        _hover: {
          bg: "brand.secondary",
          opacity: 0.9,
        },
      },
      outline: {
        borderColor: "brand.primary",
        color: "brand.primary",
        _hover: {
          bg: "brand.primary",
          color: "white",
        },
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },

  Card: {
    baseStyle: {
      bg: "brand.background",
      borderRadius: "lg",
      boxShadow: "md",
      p: 4,
    },
    variants: {
      elevated: {
        boxShadow: "xl",
        bg: { _light: "white", _dark: "gray.800" },
      },
    },
  },

  Input: {
    variants: {
      outline: {
        field: {
          borderColor: "border.DEFAULT",
          _hover: {
            borderColor: "brand.primary",
          },
          _focus: {
            borderColor: "brand.primary",
            boxShadow: "0 0 0 1px var(--chakra-colors-brand-primary)",
          },
        },
      },
    },
  },

  Heading: {
    baseStyle: {
      fontFamily: "heading",
      fontWeight: "bold",
    },
    variants: {
      hero: {
        color: "brand.HeroProductsTitle.DEFAULT",
        fontSize: { base: "2xl", md: "4xl" },
      },
      section: {
        color: "brand.text.DEFAULT",
        fontSize: { base: "xl", md: "2xl" },
      },
    },
  },

  Text: {
    baseStyle: {
      color: "fg.DEFAULT",
    },
    variants: {
      muted: {
        color: "fg.muted",
      },
    },
  },
};
