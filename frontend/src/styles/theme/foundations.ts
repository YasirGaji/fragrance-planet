export const fonts = {
  body: "barlow, sans-serif",
  heading: "barlow, sans-serif",
};

export const spacing = {
  "128": { value: "32rem" },
  "144": { value: "36rem" },
};

export const sizes = {
  "1/7": { value: "14.285%" },
  "2/7": { value: "28.571%" },
  "3/7": { value: "42.857%" },
};

export const animations = {
  shakeX: { value: "shakeX 1s ease-in-out infinite" },
};

export const keyframes = {
  shakeX: {
    "0%, 100%": { transform: "translateX(-100%)" },
    "50%": { transform: "translateX(100%)" },
  },
};

export const breakpoints = {
  sm: { value: "30em" }, // 480px
  md: { value: "48em" }, // 768px
  lg: { value: "62em" }, // 992px
  xl: { value: "80em" }, // 1280px
  "2xl": { value: "96em" }, // 1536px
};